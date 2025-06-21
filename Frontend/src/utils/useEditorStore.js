import { create } from 'zustand'

const useEditorStore = create((set) => ({
  selectedLayer: "canvas",
  textOptions:{
    text: "",
    fontSize: 16,
    color:"#000000",
    top: 48,
    left: 0
  },
  canvasOptions:{
    height:0,
    orientation: "",
    size: "original",
    backgroundColor: "#008080"
  },
  setSelectedLayer: (layer) => set(() => ({ selectedLayer: layer })),
  setTextOptions: (text)=> set(()=> ({textOptions: text})),
  setCanvasOptions: (canvas)=> set(()=> ({canvasOptions: canvas})),
  addText: ()=> set(()=>({
    textOptions:{
    text: "Add text",
    fontSize: 48,
    color:"#00000",
    top: 48,
    left: 48
  },
  }))
}));

export default useEditorStore;