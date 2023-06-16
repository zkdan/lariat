const ImageCard =({cardInfo, handleClick})=>{
  const {month, thumbUrl, fullUrl, name, year} = cardInfo;
return(
  <div className="imageCard" tabIndex={1} onClick={() => handleClick(fullUrl)}>
    <p>{month} {year}</p>
    <img src={thumbUrl} alt={name} />
  </div>
)
}

export default ImageCard;