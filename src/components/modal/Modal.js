import React from "react";
import { Background, CloseModal, ModalContent, ModalWrapper } from "./style";

function Modal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <h1>Thank You! 😁</h1>
            </ModalContent>
            <CloseModal>
              <button onClick={() => setShowModal((prev) => !prev)}>Ok</button>
            </CloseModal>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}

export default Modal;
