import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import { operationsSliceActions } from "../../Store/operationsSlice";

const Backdrop = () => {
  const dispatch = useDispatch();

  function closeCartHandler() {
    dispatch(operationsSliceActions.toggleShowCart());
  }

  return (
    <div
      className="fixed z-20 top-0 left-0 w-screen h-screen bg-black/50 flex justify-center items-center"
      onClick={closeCartHandler}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed z-30 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-scroll max-h-[80vh] h-fit w-fit min-w-[360px]  bg-primary rounded-xl">
      <div className="w-full">{props.children}</div>
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
