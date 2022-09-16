import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import Styles from "./Modal.module.css";

import { operationsSliceActions } from "../../Store/operationsSlice";

const Backdrop = () => {
  const dispatch = useDispatch();

  function closeCartHandler() {
    dispatch(operationsSliceActions.toggleShowCart());
  }

  return <div className={Styles.backdrop} onClick={closeCartHandler}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={Styles.modal}>
      <div className={Styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
