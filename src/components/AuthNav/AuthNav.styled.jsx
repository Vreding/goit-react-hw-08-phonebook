import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';
import { MdHowToReg, MdLogin } from 'react-icons/md';

export const Link = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-left: auto;
  padding: 4px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  text-decoration: none; 
  color: rgb(0, 0, 0);

  &.active {
    color: rgb(255, 0, 0);
  }  
  
  &:hover > svg{
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),
                0 5px 5px rgba(0, 0, 0, 0.25);
  };

  &:active > svg {    
    background-color: rgb(181, 245, 254);
  }
`;


export const IconRegister = styled(MdHowToReg)`
  padding: 4px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: buttonface;
  fill: rgb(0, 0, 255);
  width: 16px;
  height: 16px;
  transition: box-shadow 250ms linear;
`;

export const IconLogin= styled(MdLogin)`
  padding: 4px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: buttonface;
  fill: rgb(0, 0, 255);
  width: 16px;
  height: 16px;
  transition: box-shadow 250ms linear;
`;
