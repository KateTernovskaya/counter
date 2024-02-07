import React from 'react';
import {Button} from "./Button";
import styled from "styled-components";

export type CountProps = {
    incCount: (num: number) => void
    resetCount: () => void
    count: number
    plusDisabled: boolean
    resetDisabled: boolean
    maxNumber: number
    error: boolean
    help: boolean
}

export const Count = (props: CountProps) => {
    console.log(props.count)
    const intCountHandler = () => {
        props.incCount(props.count)
    }
    const resetCountHandler = () => {
        props.resetCount()
    }
    const countIsMaximal = props.count === props.maxNumber
    const isError = props.error ? props.error && <p style={{color: 'red', fontSize: '24px'}}>
        Incorrect value! <br/> The value cannot be lower than 0, or higher than the max value</p> : props.count

    return (
        <StyledCount>
            <CountNumber className={`count ${countIsMaximal ? 'red' : ''}`}>{isError}</CountNumber>

            <BtnBlock>
                <Button content={'+'}
                        onClickHandler={intCountHandler}
                        isDisabled={props.plusDisabled}
                />
                <Button content={'reset'}
                        onClickHandler={resetCountHandler}
                        isDisabled={props.resetDisabled}
                />
            </BtnBlock>
        </StyledCount>
    );
};

const StyledCount = styled.div`
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
  
  &.red {
    color: red;
  }
  
  p{
    text-align: center;
  }
`

export const BtnBlock = styled.div`
  background-color: white;
  padding: 20px;
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  gap: 70px;
`

