import React from "react";
import "./Modal.css";
import ReactModal from "react-modal";
import { Close } from "@mui/icons-material";

function Modal(prop) {

  let modalWidth = prop.comparing ? "80%" : "40%";

  const customStyles = {
    content: {
      border: "none",
      padding: "0",
      marginRight: "auto",
      marginLeft: "auto",
      width: modalWidth
    }
  };

  return (
    prop.comparing ?
      // When comparing is ✔️✔️✔️ TRUE ✔️✔️✔️
      (<ReactModal isOpen={prop.show} contentLabel="Minimal Modal Example" ariaHideApp={false} style={customStyles}>
        <div className="modal">
        <Close onClick={prop.handleCloseModal} />
        <div className="regions-container">

          {/* ❗❗❗❗❗❗ REWRITE THIS TO MAP ❗❗❗❗❗ */}
          <div className="region1">
            <h1>{prop.modalInfo[0]?.jurisdiction}</h1>
            {/* <h2>Filter Categories</h2>
            {prop.modalInfo[0]?.filterCategories !== undefined && prop.modalInfo[0]?.filterCategories.map((option, index) => (
              <p key={index}>{option}</p>
            ))}
            <h2>Privacy Laws</h2>
            {prop.modalInfo[0]?.privacyLaws !== undefined && prop.modalInfo[0]?.privacyLaws.map((law, index) => (
              <p key={index}>{law.lawName}</p>
            ))}
            <h2>Other Privacy Laws</h2>
            {prop.modalInfo[0]?.otherPrivacyLaws !== undefined && prop.modalInfo[0]?.otherPrivacyLaws.map((law, index) => (
              <p key={index}>{law.lawName}</p>
            ))} */}
            <p>{JSON.stringify(prop.modalInfo[0])}</p>
          </div>

          <div className="region2">
            <h1>{prop.modalInfo[1]?.jurisdiction}</h1>
            {/* <h2>Filter Categories</h2>
            {prop.modalInfo[1]?.filterCategories !== undefined && prop.modalInfo[1]?.filterCategories.map((option, index) => (
              <p key={index}>{option}</p>
            ))}
            <h2>Privacy Laws</h2>
            {prop.modalInfo[1]?.privacyLaws !== undefined && prop.modalInfo[1]?.privacyLaws.map((law, index) => (
              <p key={index}>{law.lawName}</p>
            ))}
            <h2>Other Privacy Laws</h2>
            {prop.modalInfo[1]?.otherPrivacyLaws !== undefined && prop.modalInfo[1]?.otherPrivacyLaws.map((law, index) => (
              <p key={index}>{law.lawName}</p>
            ))} */}
            <p>{JSON.stringify(prop.modalInfo[1])}</p>
          </div>
        </div>
        </div>
      </ReactModal>) :

      // When comparing is ❌❌❌ FALSE ❌❌❌
      (<ReactModal isOpen={prop.show} contentLabel="Minimal Modal Example" ariaHideApp={false} style={customStyles}>
        <div className="modal">
          <Close onClick={prop.handleCloseModal} />
          <h1>{prop.name}</h1>

          <p>{JSON.stringify(prop.modalInfo[0])}</p>

          {/* <h2>Filter Categories</h2>
          {prop.modalInfo[0]?.filterCategories !== undefined && prop.modalInfo[0]?.filterCategories.map((option, index) => (
            <p key={index}>{option}</p>
          ))}
          <h2>Privacy Laws</h2>
          {prop.modalInfo[0]?.privacyLaws !== undefined && prop.modalInfo[0]?.privacyLaws.map((law, index) => (
            <p key={index}>{law.lawName}</p>
          ))}
          <h2>Other Privacy Laws</h2>
          {prop.modalInfo[0]?.otherPrivacyLaws !== undefined && prop.modalInfo[0]?.otherPrivacyLaws.map((law, index) => (
            <p key={index}>{law.lawName}</p>
          ))} */}
          <button onClick={prop.handleCompareClicked} style={{ display: prop.comparing ? 'none' : '' }}>Compare</button>
        </div>
      </ReactModal>)

  );
}

export default Modal;
