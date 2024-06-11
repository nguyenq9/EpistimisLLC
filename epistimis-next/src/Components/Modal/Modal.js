import { useState, useEffect, useRef } from "react";
import { Close } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { handleUpdateCall } from "@/js/API";
import "./Modal.css";

import LawTabs from './LawTabs.js';
import OtherLaws from "./OtherLaws.js";
import ComprehensiveLaw from "./ComprehensiveLaw.js";

const theme = createTheme({
  palette: {
    buttons: {
      main: '#38A8A3',
      dark: '#95DAD8',
      light: '#0F2E2C',
      contrastText: '#000'
    }
  }
});

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

  const handleSubmit = async () => {
    const editor = document.getElementById('editor');
    const updatedData = JSON.parse(editor.value);
    const { jurisdiction } = modalInfo[0];

    try {
        handleUpdateCall(jurisdiction, updatedData);
        // console.log('Update successful:', response);
        closeModal();
        setEditable(false);
        console.log("passed handleUpdateCall")
    } catch (error) {
        console.error('Error updating law:', error);
    }
};

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
    <ThemeProvider theme={theme}>
      <dialog ref={ref} onCancel={closeModal} className={`modal ${comparing ? 'comparing' : 'not-comparing'}`}>
        <div className={`content-container ${modalInfo.length === 2 ? 'two-items' : 'one-item'}`}>
          {modalInfo.map((item, index) => (
            <div key={index} className="modal-section">
              <div id="modal-header">
                <h3 id="modal-region-name">{item.jurisdiction}</h3>
                <div id="modal-buttons">
                  <Button
                    onClick={handleCompareClicked}
                    style={{ display: comparing ? 'none' : '' }}
                    id="compare-button"
                    color="buttons"
                    variant="contained"
                  >
                    Compare
                  </Button>
                  {admin ? (<button onClick={() => handleSetEditable(!editable)}>
                    {editable ? ("Submit") : ("✏️")}
                  </button>) : null}
                </div>
              </div>

            {(editable && !comparing && admin) ? (
              <textarea id="editor"></textarea>
            ) : (item.privacyLaws.length > 0 && item.otherPrivacyLaws.length > 0 ? (
              <LawTabs comprehensiveLaws={item.privacyLaws} otherPrivacyLaws={item.otherPrivacyLaws} editable={editable} />
            ) : item.privacyLaws.length === 1 && item.otherPrivacyLaws.length <= 0 ? (
              <ComprehensiveLaw law={item.privacyLaws[0]} editable={editable} />
            ) : item.privacyLaws.length > 0 && item.otherPrivacyLaws.length <= 0 ? (
              <LawTabs comprehensiveLaws={item.privacyLaws} editable={editable} />
            ) : item.privacyLaws.length <= 0 && item.otherPrivacyLaws.length > 0 ? (
              <OtherLaws otherPrivacyLaws={item.otherPrivacyLaws} editable={editable} />
            ) : null)}



          </div>
        ))}
      </div>
      <Close onClick={closeModal} className="close-button" />
    </dialog>
    </ThemeProvider>
  );
}

export default Modal;
