import styled from "@emotion/styled";
import { MdClose } from "react-icons/md";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 30%;
  padding: 16px;
  background-color: rgb(235, 235, 235);;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),
              0 5px 5px rgba(0, 0, 0, 0.25);
  & > h1 {
    font-size: 28px;
    text-align: center;
  }
`;

export const Button = styled.button`
position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center; 
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;  
  cursor: pointer;  
  
  &:hover > svg {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),
                0 5px 5px rgba(0, 0, 0, 0.25);
  };

  &:active > svg {
    background-color: rgb(181, 245, 254);
  };  
`;

export const IconClose = styled(MdClose)`  
  width: 16px;
  height: 16px;
  padding: 4px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: buttonface;
  transition: box-shadow 250ms linear;
`;

