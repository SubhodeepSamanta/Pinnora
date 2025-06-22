import ImageKit from "imagekit";
import Pin from "../models/pin.model.js"
import User from "../models/user.model.js";
import sharp from 'sharp'

export const getPins= async (req,res)=>{
    const pageNumber= Number(req.query.cursor) || 0;
    const search= req.query.search;
    const userId= req.query.userId;
    const boardId= req.query.boardId;
    const LIMIT=21;
    const pins= await Pin.find(search?{
        $or:[
            {title:{$regex:search, $options:"i"}},
            {tags:{$in:[search]}}
        ]
    }
    :userId
    ? {user:userId}
    :boardId
    ? {board: boardId}
    :{}
    ).limit(LIMIT).skip(LIMIT*pageNumber);
    const hasNextPage= pins.length===LIMIT;
    res.status(200).send({pins, nextCursor: hasNextPage ? pageNumber+1 : null});
}

export const getPin= async(req,res)=>{
    const {id}=req.params;
    const pin= await Pin.findById(id).populate("user", "username img displayName");
    res.status(200).send(pin);
}

export const createPin= async(req,res)=>{
    const {title,description,link,board,tags,textOptions,canvasOptions}= req.body;
    const media= req.files.media;
    if(!title,!description,!media){
        res.status(400).send("All fields are required");
    }
    const parsedTextOptions= JSON.parse(textOptions || {});
    const parsedCanvasOptions= JSON.parse(canvasOptions || {});

    const metadata= await sharp(media.data).metadata();
    const originalOrientation= metadata.width < metadata.height ? "portrait" : "landscape" ;
    const originalAspectRatio= metadata.width / metadata.height ;

    let clientAspectRatio;
    let height;
    let width;
    if(parsedCanvasOptions.size !== "original"){
        clientAspectRatio= parsedCanvasOptions.size.split(":")[0]/parsedCanvasOptions.size.split(":")[1];
    }else{
        parsedCanvasOptions.orientation===originalOrientation ? (clientAspectRatio=originalAspectRatio) : (clientAspectRatio= 1 / originalAspectRatio) ;
    }
    width= metadata.width;
    height= metadata.width / clientAspectRatio;
    console.log(metadata.width);
    console.log(clientAspectRatio);
    console.log(height);
    
    const imagekit = new ImageKit({
        publicKey : process.env.IK_PUBLIC_KEY,
        privateKey : process.env.IK_PRIVATE_KEY,
        urlEndpoint : process.env.IK_URL_ENDPOINT,
    });

    let cropping="";

    if(parsedCanvasOptions.size!=="original"){
        if(originalAspectRatio>clientAspectRatio){
            cropping= ',cm-pad_resize';
        }else{
            if(originalOrientation==='landscape' && parsedCanvasOptions.orientation==='portrait'){
                cropping= ',cm-pad_resize';
            }
        }
    }
    const textLeftPosition= Math.round((parsedTextOptions.left * width)/375);
    const textTopPosition = Math.round(
    (parsedTextOptions.top * height) / parsedCanvasOptions.height
  );
    const transformationString= `w-${width},h-${height}${cropping},bg-${parsedCanvasOptions.backgroundColor.substring(1)}${parsedTextOptions.text ? `,l-text,i-${parsedTextOptions.text},fs-${parsedTextOptions.fontSize*2},lx-${textLeftPosition},ly-${textTopPosition},co-${parsedTextOptions.color.substring(1)},l-end` : ""}`;
    console.log(transformationString);
    
    imagekit.upload({
        file: media.data,
        fileName: media.name,
        folder: "pins",
        transformation: {
            pre: transformationString
        }
    }).then(async(response)=>{
        const newPin= await Pin.create({
            title,
            description,
            link: link || null,
            board: board || null,
            tags: tags ? tags.split(",").map((tag)=> tag.trim()) : [],
            media: response.filePath,
            height: response.height,
            width: response.width,
            user: req.user
        })
        res.status(200).send(newPin)
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
}