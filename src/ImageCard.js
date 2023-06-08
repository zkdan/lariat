const ImageCard =({cardInfo})=>{
  const {month, imageUrl, name, year} = cardInfo;
return(
  <div className="imageCard" tabIndex={1}>
    <p>{month} {year}</p>
    <img src={imageUrl} alt={name} />
  </div>
)
}

export default ImageCard;