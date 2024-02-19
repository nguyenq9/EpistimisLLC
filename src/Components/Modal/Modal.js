import React from "react";
import "./Modal.css";
import ReactModal from "react-modal";
import { Close, ShowChartOutlined } from "@mui/icons-material";

function Modal({show, handleCloseModal, name, comparing}) {
  return (
    <ReactModal isOpen={show} contentLabel="Minimal Modal Example" closeTimeoutMS={500}>
      <Close onClick={handleCloseModal} />
      <h1>{name}</h1>
      {comparing.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </ReactModal>
  );
}

export default Modal;
