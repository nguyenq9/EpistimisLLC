import { useState, useEffect, useRef } from "react";
import { Close } from "@mui/icons-material";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import "./Modal.css";

import Law from './Law.js';
import LawTable from './LawTable.js';

function Modal({ openModal, closeModal, handleCompareClicked, comparing, modalInfo, name }) {
  const [ admin, setAdmin ] = useState(false);
  const [ activeTab, setActiveTab ] = useState(0);

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
            {/* {item.privacyLaws.length > 0 && item.otherPrivacyLaws.length > 0 ? ( */}
              <div>
                <ButtonGroup variant="contained" aria-label="contained primary button group">
                  {item.privacyLaws.map((law, lawIndex) => (
                    <Button key={lawIndex} onClick={() => setActiveTab(lawIndex)}>
                      Law {lawIndex + 1}
                    </Button>
                  ))}
                  <Button onClick={() => setActiveTab(item.privacyLaws.length)}>Other Laws</Button>
                </ButtonGroup>
                <div className="law-container">
                  {item.privacyLaws.map((law, lawIndex) => (
                    <div key={lawIndex} style={{ display: activeTab === lawIndex ? 'block' : 'none' }}>
                      <Law law={law}/>
                    </div>
                  ))}
                  <div style={{ display: activeTab === item.privacyLaws.length ? 'block' : 'none' }}>
                    <LawTable otherPrivacyLaws={item.otherPrivacyLaws}/>
                  </div>
                </div>
              </div>
            {/* ) : null} */}

            {/* {item.privacyLaws.length === 0 && item.otherPrivacyLaws.length > 0 ? (
              <p>Table of other privacy laws would go here.</p>
            ) : null}
            
            {(item.privacyLaws.length === 1) ? (
              <Law law={item.privacyLaws[0]}/>
            ) : null}

            {item.privacyLaws.length > 1 ? (
              <div className="law-container">
                {item.privacyLaws.map((law, index) => (
                  <Law key={index} law={law}/>
                ))}
              </div>
            ) : null} */}


          </div>
        ))}
      </div>
      <Close onClick={closeModal} className="close-button"/>
    </dialog>
  );
}

export default Modal;

