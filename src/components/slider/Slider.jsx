import "./slider.scss";
import arrow from '../../assets/arrow.png'
import { useState } from "react";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction)=>{
    if(direction === "left"){
      if(imageIndex === 0){
        setImageIndex(images.length - 1);
      }
      else{
        setImageIndex(imageIndex-1);
      }
    }
    else{
      if(imageIndex === images.length-1){
        setImageIndex(0);
      }
      else{
        setImageIndex(imageIndex+1);
      }
    }
  }
  return (
    <div className="slider">
      { imageIndex !== null &&
      <div className="fullSlider">
        <div className="arrow">
          <img src={arrow} onClick={()=>changeSlide("left")}/>
        </div>
        <div className="Img">
          <img src={images[imageIndex]} alt="" />
        </div>
        <div className="arrow">
        <img className="right" src={arrow}  onClick={()=>changeSlide("right")}/>
        </div>
        <div className="close" onClick={()=>setImageIndex(null)}>X</div>
      </div>}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={()=>setImageIndex(0)}/>
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img key={index} src={image} 
          onClick={()=>setImageIndex(index+1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
