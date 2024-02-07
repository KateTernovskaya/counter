import styled from "styled-components";

const Button = styled.button`
  width: 150px;
  height: 50px;
  font-size: 30px;
  border: none;
  background-color: rgb(45, 126, 117);
  border-radius: 5px;
  cursor: pointer;
  color: white;

  &[disabled] {
    background-color: rgba(45, 126, 117, 0.5);
  }
`
export const S ={
    Button,
}