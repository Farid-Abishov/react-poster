import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const Modal = ({children}) => {
  const navigate=useNavigate();
  function closeHandler(){
   navigate('..')
  }
  return (
      <>
    <div className={classes.backdrop}  onClick={closeHandler} />
    <dialog open className={classes.modal}>{children}  </dialog>
  </>
  )
}

export default Modal

