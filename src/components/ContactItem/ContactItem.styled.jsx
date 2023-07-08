import styled from "@emotion/styled";
import { MdDeleteForever, MdEditNote } from "react-icons/md";

export const Contact = styled.li`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;  
`;

export const Text = styled.p`
  order: -1;
  flex-grow: 1;  
  display: flex;
  align-items: flex-end;
  gap: 8px;  
  font-size: 16px;
  font-family: 'Roboto', sans-serif;  
  text-transform: capitalize;    
  transition: color 250ms linear,
              text-shadow 250ms linear;  

  & > span {
    font-weight: bold;
    flex-basis: 50%;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center; 
  padding: 0;
  background-color: rgb(255, 255, 255);
  border: none;
  outline: none;  
  cursor: pointer;  
  
  &:hover > svg {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),
                0 5px 5px rgba(0, 0, 0, 0.25);
  };

  &:hover ~ p,
  &:active ~ p {
    color: rgb(255, 0, 0);
    text-shadow: 0 3px 3px rgba(0, 0, 0, 0.25),
                 0 3px 3px rgba(0, 0, 0, 0.25);
  };

  &.buttonEdit:hover ~ p,
  &.buttonEdit:active ~ p {
    color: rgb(0, 0, 255);       
  };

  &:active > svg {
    background-color: rgb(181, 245, 254);
       
  };

  &:active + p {
    text-decoration: line-through;
  };
`;

export const IconEdit = styled(MdEditNote)`
  fill: ${props => props.edit ? 'rgb(0, 0, 255)' : 'rgb(255, 0, 0)'};
  width: 16px;
  height: 16px;
  padding: 4px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: buttonface;
  transition: box-shadow 250ms linear;
`;

export const IconDelete = IconEdit.withComponent(MdDeleteForever)