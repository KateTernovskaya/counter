import styled from "styled-components";

const Count = styled.div`
  width: 500px;
  background-color: rgb(45, 126, 117);
  border-radius: 10px;
`
const CountNumber = styled.span`
  background-color: white;
  margin: 30px;
  height: 200px;
  color: rgb(45, 126, 117);
  font-size: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  &.help {
    text-align: center;
    font-size: 24px;
    color: rgb(45, 126, 117);
  }

  &.error {
    text-align: center;
    font-size: 24px;
    color: red;
  }

  &.red {
    color: red;
  }

`

const BtnBlock = styled.div`
  background-color: white;
  padding: 20px;
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  gap: 70px;
`

export const S = {
    Count,
    CountNumber,
    BtnBlock,
}