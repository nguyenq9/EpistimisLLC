import { useEffect, useRef } from "react";
import { Close } from "@mui/icons-material";
import "./Modal.css";

function Modal({ openModal, closeModal, handleCompareClicked, comparing, modalInfo, name }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={closeModal} className="modal">
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
            <p>
              {
                (item.privacyLaws.length + item.otherPrivacyLaws.length) > 0 
                ? `Privacy Laws: ${item.privacyLaws.length + item.otherPrivacyLaws.length}` 
                : 'No Privacy Laws'
              }
            </p>
            {/* Add more fields as necessary */}
          </div>
        ))}
      </div>
      <Close onClick={closeModal} className="close-button" />
    </dialog>
  );
}

export default Modal;

