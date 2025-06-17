import { Image } from "@imagekit/react";

export const Img= ({src,alt, className,height, width, ...props})=>{
return (<Image
      urlEndpoint={import.meta.env.VITE_IMAGE_KIT_API}
      src={src}
      height={height}
      width={width}
      alt={alt}
      className={className}
      loading="lazy"
      {...props}
    />)
}
