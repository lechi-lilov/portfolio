import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  width: 30%;
  height: 40%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div``;

export const CloseModal = styled.div`
  button {
    background: #4071f4;
    color: white;
    text-transform: uppercase;
    border: 1px solid #4071f4;
    border-radius:4rem;
    margin-top: 40px;
    padding: 20px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 10px;
    width:100%;
    transition: 0.3s;
  }
  button:hover {
      cursor:pointer;
    background:white;
    border: 1px solid #4071f4;
    color:#4071f4;
  }
  ,
`;
