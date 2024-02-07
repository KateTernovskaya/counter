import styled from "styled-components";

//CountSetValue
const CountSetValue = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  input {
    height: 40px;
    font-size: 20px;
    text-align: center;
    
    &.error {
      border: 2px solid red;
      outline: 2px solid red;
      background-color: rgba(255, 0, 0, 0.6);
    }
    
    &:focus {
      outline: rgb(45, 126, 117);
      border: 2px solid rgb(45, 126, 117);
    }
  }
`

//CountSet
const CountSet = styled.div`
  width: 500px;
  background-color: rgb(45, 126, 117);
  border-radius: 10px;
`

const SetBlock = styled.div`
  background-color: white;
  margin: 30px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 10px;
  font-size: 20px;
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

export const S ={
    CountSetValue,
    CountSet,
    SetBlock,
    BtnBlock,
}