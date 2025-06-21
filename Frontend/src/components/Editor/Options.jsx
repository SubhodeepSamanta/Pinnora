import React, { useState } from "react";
import useEditorStore from "../../utils/useEditorStore";
import { HexColorPicker } from "react-colorful";

const Options = () => {
  const { selectedLayer, textOptions, setTextOptions } = useEditorStore();
  const [colorPickerOpen, setColorPickerOpen] = useState();
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
                style={{backgroundColor: `${textOptions.color}`}}
                onClick={() => setColorPickerOpen((s) => !s)}
                className="hex-color-picker"
              ></div>
            {colorPickerOpen ? (
                <HexColorPicker color={textOptions.color} onChange={(color)=> setTextOptions({...textOptions, color})} className="hex-picker" />
            ) : (
                <></>
            )}
            </div>
          </div>
        </div>
      ) : (
        <div>Canvas</div>
      )}
    </div>
  );
};

export default Options;
