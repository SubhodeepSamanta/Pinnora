import React, { useState } from "react";
import useEditorStore from "../../utils/useEditorStore";
import { HexColorPicker } from "react-colorful";

const portraitSizes = [
  {
    name: "1:2",
    width: 1,
    height: 2,
  },
  {
    name: "9:16",
    width: 9,
    height: 16,
  },
  {
    name: "2:3",
    width: 2,
    height: 3,
  },
  {
    name: "3:4",
    width: 3,
    height: 4,
  },
  {
    name: "4:5",
    width: 4,
    height: 5,
  },
  {
    name: "1:1",
    width: 1,
    height: 1,
  },
];

const landscapeSizes = [
  {
    name: "2:1",
    width: 2,
    height: 1,
  },
  {
    name: "16:9",
    width: 16,
    height: 9,
  },
  {
    name: "3:2",
    width: 3,
    height: 2,
  },
  {
    name: "4:3",
    width: 4,
    height: 3,
  },
  {
    name: "5:4",
    width: 5,
    height: 4,
  },
  {
    name: "1:1",
    width: 1,
    height: 1,
  },
];

const Options = () => {
  const {
    selectedLayer,
    textOptions,
    setTextOptions,
    canvasOptions,
    setCanvasOptions,
  } = useEditorStore();
  const [colorPickerOpen, setColorPickerOpen] = useState();

  const handleOrientation= (newOrientation)=>{
    setCanvasOptions({...canvasOptions, orientation: newOrientation});
  }
  
  const handleSize= (newSize)=>{
    setCanvasOptions({...canvasOptions, size: newSize});
  }
  console.log(canvasOptions);
  return (
    <div className="options-layer">
      {selectedLayer === "text" ? (
        <div className="textOptions">
          <div className="text-option">
            Font Size
            <div className="font-size-input">
              <input
                type="number"
                id="font-size"
                value={textOptions.fontSize}
                onChange={(e) =>
                  setTextOptions({ ...textOptions, fontSize: e.target.value })
                }
              />
            </div>
          </div>
          <div className="text-option">
            Color
            <div className="text-color">
              <div
                style={{ backgroundColor: `${textOptions.color}` }}
                onClick={() => setColorPickerOpen((s) => !s)}
                className="hex-color-picker"
              ></div>
              {colorPickerOpen ? (
                <HexColorPicker
                  color={textOptions.color}
                  onChange={(color) =>
                    setTextOptions({ ...textOptions, color })
                  }
                  className="hex-picker"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="canvas-options">
          <div className="canvas-option">
            Orientation
            <div className="orientation-options">
              <div onClick={()=>handleOrientation("portrait")}
                className={`orientation-option ${
                  canvasOptions.orientation === "portrait" ? "selected" : ""
                }`}
              >
                P
              </div>
              <div onClick={()=>handleOrientation("landscape")}
                className={`orientation-option ${
                  canvasOptions.orientation === "landscape" ? "selected" : ""
                }`}
              >
                L
              </div>
            </div>
          </div>
          <div className="canvas-option">
            Size
            {canvasOptions.orientation === "landscape" ? (
              <div className="size-options">
                {
                  <>
                    <div onClick={()=>handleSize("original")}
                      className={`size ${
                        canvasOptions.size === "original" ? "selected" : ""
                      }`}
                    >
                      Original
                    </div>
                    {landscapeSizes.map((size) => (
                      <div  onClick={()=>handleSize(size.name)} className={`size ${canvasOptions.size===size.name ? "selected" : ""}`} key={size.name}>
                        {size.name}
                      </div>
                    ))}
                  </>
                }
              </div>
            ) : (
              <div className="size-options">
                <>
                  <div onClick={()=>handleSize("original")}
                    className={`size ${
                      canvasOptions.size === "original" ? "selected" : ""
                    }`}
                  >
                    Original
                  </div>
                  {portraitSizes.map((size) => (
                    <div  onClick={()=>handleSize(size.name)} className={`size ${canvasOptions.size===size.name ? "selected" : ""}`} key={size.name}>
                      {size.name}
                    </div>
                  ))}
                </>
              </div>
            )}
          </div>
          <div className="canvas-option">
            Background Color
            <div className="text-color">
              <div
                style={{ backgroundColor: `${canvasOptions.backgroundColor}` }}
                onClick={() => setColorPickerOpen((s) => !s)}
                className="hex-color-picker"
              ></div>
              {colorPickerOpen ? (
                <HexColorPicker
                  color={canvasOptions.backgroundColor}
                  onChange={(backgroundColor) =>
                    setCanvasOptions({ ...canvasOptions, backgroundColor })
                  }
                  className="hex-picker"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Options;
