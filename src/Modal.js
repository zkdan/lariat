import './Modal.css'
const Modal = ({url, close}) => {
return(
  <div className="modal" onClick={(e)=>close(e)}>
    <img src={url} alt="" />
  </div>
)
}
export default Modal;