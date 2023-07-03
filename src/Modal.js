import { useEffect, forwardRef } from "react";
import './Modal.css'

const Modal = forwardRef(function Modal({url, close, title}, ref){
  const handleKeydown = (e)=>{
    if(e.keyCode === 27){
      close();
    }
  }
  useEffect(()=>{
    document.addEventListener("keydown", handleKeydown);
    return()=>{
      document.removeEventListener("keydown", handleKeydown);
    }
  })
  
  return(
    <div ref={ref}
    className="modal" 
    >
      <div className="container">
        <button autoFocus tabIndex={1} onClick={(e)=>close(e)}></button>
        <p>{title}</p>
        <img src={url} alt={title} />
      </div>
    </div>
)
})
export default Modal;