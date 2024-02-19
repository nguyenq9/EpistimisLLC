import React from "react";
import "./Modal.css";
import ReactModal from "react-modal";
import { Close } from "@mui/icons-material";
import Compare from "../Compare/Compare";

function Modal(prop) {
  return (
    <ReactModal isOpen={prop.show} contentLabel="Minimal Modal Example" closeTimeoutMS={500}>
      <Close onClick={prop.handlCloseModal} />
      <h1>{prop.name}</h1>
      <p>{prop.modalInfo.jurisdiction}</p>
      <h2>Filter Categories</h2>
      {prop.modalInfo.filterCategories !== undefined && prop.modalInfo.filterCategories.map((option, index) => (
        <p key={index}>{option}</p>
      ))}
      <h2>Privacy Laws</h2>
      {prop.modalInfo.privacyLaws !== undefined && prop.modalInfo.privacyLaws.map((law, index) => (
        <p key={index}>{law.lawName}</p>
      ))}
      <h2>Other Privacy Laws</h2>
      {prop.modalInfo.otherPrivacyLaws !== undefined && prop.modalInfo.otherPrivacyLaws.map((law, index) => (
        <p key={index}>{law.lawName}</p>
      ))}
      <button onClick={prop.setCompareActive}>Compare</button>
    </ReactModal>
  );
}

export default Modal;
