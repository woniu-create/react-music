import React,{useEffect} from "react";
const Backdrop = ({trackIndex,activeColor,isPlaying}) => {
  useEffect(()=>{
    document.documentElement.style.setProperty("--active-color",activeColor);
  },[trackIndex,activeColor])
  return <div className={`color-backdrop${isPlaying ? "playing" : "idle"}`}></div>
}
export default Backdrop