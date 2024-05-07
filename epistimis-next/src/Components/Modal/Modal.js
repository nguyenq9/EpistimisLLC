import { useState, useEffect, useRef } from "react";
import { Close } from "@mui/icons-material";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import "./Modal.css";

import Law from './Law.js';

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
            <textarea readOnly={!admin}>
              {
                (item.privacyLaws.length + item.otherPrivacyLaws.length) > 0 
                ? `Privacy Laws: ${item.privacyLaws.length + item.otherPrivacyLaws.length}` 
                : 'No Privacy Laws'
              }
            </textarea>
            <ButtonGroup variant="contained" aria-label="contained primary button group">
              {(item.privacyLaws.length > 0) ? item.privacyLaws.map((law, index) => (
                <Button key={index}>Law {index + 1}</Button>
              )) : null}
              <Button>Other Privacy Laws</Button>
            </ButtonGroup>
            
          </div>
        ))}
      </div>
      <Close onClick={closeModal} className="close-button"/>
    </dialog>
  );
}

export default Modal;

