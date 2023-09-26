import {forwardRef } from "react";

const ImageCard = forwardRef(function ImageCard({cardInfo, handleClick}, ref){
  const {month, miniUrl, name, year, id} = cardInfo;
return(
  <div ref={ref}
  id={id}
      className="imageCard" 
      tabIndex={1} 
      onClick={() => handleClick(id)}>
    <p>{month} {year}</p>
    <img src={miniUrl} alt={name} />
  </div>
)
})

export default ImageCard;
