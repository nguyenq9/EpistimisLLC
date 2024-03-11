import React from "react";
import "./Modal.css";
import ReactModal from "react-modal";
import { Close } from "@mui/icons-material";

function Modal(prop) {

  return (
    prop.comparing ?
      // When comparing is ✔️✔️✔️ TRUE ✔️✔️✔️
      (<ReactModal isOpen={prop.show} contentLabel="Minimal Modal Example"  ariaHideApp={false}>
        <Close onClick={prop.handleCloseModal} />
        <div className="regions-container">
          {prop.selectedRegions && prop.selectedRegions.map((region, index) => (
            <div key={index} className="region">
              <h1>{region}</h1>
            </div>
          ))}
        </div>
      </ReactModal>) :

      // When comparing is ❌❌❌ FALSE ❌❌❌
      (<ReactModal isOpen={prop.show} contentLabel="Minimal Modal Example"  ariaHideApp={false}>
        <Close onClick={prop.handleCloseModal} />
        <h1>{prop.name}</h1>
        <p>{prop.modalInfo[0]?.jurisdiction}</p>
        <h2>Filter Categories</h2>
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
        ))}
        <button onClick={prop.handleCompareClicked} style={{ display: prop.comparing ? 'none' : '' }}>Compare</button>
      </ReactModal>)

  );
}

export default Modal;
