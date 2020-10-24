import styled from "styled-components";
// #4c5e5e

export const Container = styled.div`
  background-color: #006d91;
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0px;
  box-shadow: 0px 7px 16px 1px rgba(0,0,0,0.75);
`; 
export const Title = styled.h1`
  color: yellow;
`;

export const ContainerButtons = styled.div`
  
`;

export const Button = styled.button`
  margin: 10px 10px;
  background: transparent;
  border: 3px solid #ccc;
  border-radius: 20px;
  padding: 10px;
  color: #ccc;
  font-size: 1.2em;
  cursor: pointer;
`;