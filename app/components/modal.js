import React, { useEffect } from "react";
import styled from "styled-components";
import { XIcon } from "./index";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.95);
`;

const ModalContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  overflow: auto;
  /* text-align: center; */
  padding: 4px;
  cursor: pointer;
`;

const ModalDialogue = styled.div`
  position: relative;
  outline: 0;
  width: 100%;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  cursor: default;
  border-radius: 4px;
`;

const CloseModal = styled.a`
  position: absolute;
  right: 30px;
  top: 20px;
  height: 20px;
  width: 20px;
`;

const Modal = ({ setShowModal, children, canClose }) => {
  const listenKeyboard = (event) => {
    if (event.key === "Escape" || event.keyCode === 27) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (canClose) {
      window.addEventListener("keydown", listenKeyboard.bind(this), true);
    }
    return () => {
      if (canClose) {
        window.removeEventListener("keydown", listenKeyboard.bind(this), true);
      }
    };
  }, []);

  return (
    <>
      <ModalOverlay className="modal-overlay-div">
        <ModalContent className="modal-content-div">
          <ModalDialogue className="modal-dialog-div">
            <CloseModal onClick={() => setShowModal(false)}>
              <XIcon />
            </CloseModal>

            {children}
          </ModalDialogue>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default Modal;

// .modal-content-div:after {
//     vertical-align: middle;
//     display: inline-block;
//     height: 100%;
//     margin-left: -.05em;
//     content: '';
// }
