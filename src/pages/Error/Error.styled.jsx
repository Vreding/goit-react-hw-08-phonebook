import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 30%;  
  padding: 16px;
  border: 1px solid black;
  border-radius: 4px;
  text-align: start;
  background-color: rgb(235, 235, 235);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25),
              0 10px 10px rgba(0, 0, 0, 0.25); 
`; 

export const ErrorMessage = styled.h1`
  font-weight: 700;
  text-align: center;

   & > span {
    color: red;
  }
`;