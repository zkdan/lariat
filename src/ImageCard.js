const ImageCard =({cardInfo})=>{
  const {month, imageUrl, name} = cardInfo;
return(
  <div className="imageCard" tabIndex={1}>
    <p>{month}</p>
    <img src={imageUrl} alt={name} />
  </div>
)
}

export default ImageCard;