import { useEffect } from "react";
import {forwardRef, useRef, useCallback} from "react";
import './Modal.css'

const Modal = forwardRef(function Modal({url, close}, ref){
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
     <button autoFocus tabIndex={1} onClick={(e)=>close(e)}>x</button>
      <img src={url} alt="" />
    </div>
)
})
export default Modal;