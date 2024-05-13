import { useState, useEffect, useRef } from "react";
import { Close } from "@mui/icons-material";

import "./Modal.css";

import LawTabs from './LawTabs.js';
import OtherLaws from "./OtherLaws.js";
import ComprehensiveLaw from "./ComprehensiveLaw.js";

function Modal({ openModal, closeModal, handleCompareClicked, comparing, modalInfo, name }) {
  const [ admin, setAdmin ] = useState(false);

  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={closeModal} className={`modal ${comparing ? 'comparing' : 'not-comparing'}`}>
      <div className={`content-container ${modalInfo.length === 2 ? 'two-items' : 'one-item'}`}>
        {modalInfo.map((item, index) => (
          <div key={index} className="modal-section">
            <div className="modal-header">
              <h2>{item.jurisdiction}</h2>
              <button
                onClick={handleCompareClicked}
                style={{ display: comparing ? 'none' : '' }}
                className="compare-button"
              >
                Compare
              </button>
            </div>
            <textarea readOnly={!admin} className="editable">
              {
                (item.privacyLaws.length + item.otherPrivacyLaws.length) > 0 
                ? `Privacy Laws: ${item.privacyLaws.length + item.otherPrivacyLaws.length}` 
                : 'No Privacy Laws'
              }
            </textarea>

            {/* check to make sure there are comprehensize laws AND other privacy laws before making the button group */}
            {item.privacyLaws.length > 0 && item.otherPrivacyLaws.length > 0 ? (
              <LawTabs comprehensiveLaws={item.privacyLaws} otherPrivacyLaws={item.otherPrivacyLaws} />
            ) : item.privacyLaws.length === 1 && item.otherPrivacyLaws.length <= 0 ? (
              <ComprehensiveLaw law={item.privacyLaws[0]} />
            ) : item.privacyLaws.length > 0 && item.otherPrivacyLaws.length <= 0 ? (
              <LawTabs comprehensiveLaws={item.privacyLaws} />
            ) : item.privacyLaws.length <= 0 && item.otherPrivacyLaws.length > 0 ? (
              <OtherLaws otherPrivacyLaws={item.otherPrivacyLaws} />
            ) : null}

          </div>
        ))}
      </div>
      <Close onClick={closeModal} className="close-button"/>
    </dialog>
  );
}

export default Modal;

