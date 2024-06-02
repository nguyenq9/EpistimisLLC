import { useState, useEffect, useRef } from "react";
import { Close } from "@mui/icons-material";

import "./Modal.css";

import LawTabs from './LawTabs.js';
import OtherLaws from "./OtherLaws.js";
import ComprehensiveLaw from "./ComprehensiveLaw.js";

function Modal({ openModal, closeModal, handleCompareClicked, comparing, modalInfo, admin, setAdmin }) {
  const [editable, setEditable] = useState(false);

  const displayEditableObject = (obj) => {
    // Convert the object to a formatted JSON string
    const formattedJson = JSON.stringify(obj, null, 2);

    // Find the editor text area
    const editor = document.getElementById('editor');

    // Set the formatted JSON string as the text area's value
    editor.value = formattedJson;
  }

  const handleSetEditable = (val) => {
    setEditable(val);
  }

  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
    setEditable(false)
  }, [openModal]);

  useEffect(() => {
    if (editable && !comparing) {
      displayEditableObject(modalInfo[0]);
    }
  }, [editable]);

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
              {admin ? (    <button onClick={() => handleSetEditable(!editable)}>
                {editable ? ("Submit") : ("✏️")}
              </button>) : null}
        
            </div>

            {/* check to make sure there are comprehensize laws AND other privacy laws before making the button group */}
            {/* {!editable ? (item.privacyLaws.length > 0 && item.otherPrivacyLaws.length > 0 ? (
              <LawTabs comprehensiveLaws={item.privacyLaws} otherPrivacyLaws={item.otherPrivacyLaws} editable={editable} />
            ) : item.privacyLaws.length === 1 && item.otherPrivacyLaws.length <= 0 ? (
              <ComprehensiveLaw law={item.privacyLaws[0]} editable={editable} />
            ) : item.privacyLaws.length > 0 && item.otherPrivacyLaws.length <= 0 ? (
              <LawTabs comprehensiveLaws={item.privacyLaws} editable={editable} />
            ) : item.privacyLaws.length <= 0 && item.otherPrivacyLaws.length > 0 ? (
              <OtherLaws otherPrivacyLaws={item.otherPrivacyLaws} editable={editable} />
            ) : null) : 
            (
              <textarea id="editor">hehe</textarea>
            )} */}

            {(editable && !comparing && admin) ? (
              <textarea id="editor">hehe</textarea>
            ) : (item.privacyLaws.length > 0 && item.otherPrivacyLaws.length > 0 ? (
              <LawTabs comprehensiveLaws={item.privacyLaws} otherPrivacyLaws={item.otherPrivacyLaws} editable={editable} />
            ) : item.privacyLaws.length === 1 && item.otherPrivacyLaws.length <= 0 ? (
              <ComprehensiveLaw law={item.privacyLaws[0]} editable={editable} />
            ) : item.privacyLaws.length > 0 && item.otherPrivacyLaws.length <= 0 ? (
              <LawTabs comprehensiveLaws={item.privacyLaws} editable={editable} />
            ) : item.privacyLaws.length <= 0 && item.otherPrivacyLaws.length > 0 ? (
              <OtherLaws otherPrivacyLaws={item.otherPrivacyLaws} editable={editable} />
            ) : null) }



          </div>
        ))}
      </div>
      <Close onClick={closeModal} className="close-button" />
    </dialog>
  );
}

export default Modal;

