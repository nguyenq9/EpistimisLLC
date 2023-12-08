import React, { useState } from "react";
import "./Modal.css";
import ReactModal from "react-modal";
import { Close } from "@mui/icons-material";

function Modal(prop) {
  console.log(prop.name);
  return (
    <ReactModal isOpen={prop.show} contentLabel="Minimal Modal Example" closeTimeoutMS={500}>
      <Close onClick={prop.handlCloseModal} />
      <h1>{prop.name}</h1>
    </ReactModal>
  );
}

export default Modal;
