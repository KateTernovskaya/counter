import React, {ChangeEvent} from 'react';
import styled from "styled-components";
import {BtnBlock} from "../Count";
import {Button} from "../Button";
import {CountSetValue} from "./CountSetValue";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type CountSetPropsType = {
    settingsDisabled: boolean
    maxValue: number
    startValue: number
    setMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    setStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    error: boolean
    setBtnOnclickHandler: () => void
}

export const CountSet: React.FC<CountSetPropsType> = (
    {
        settingsDisabled, maxValue,
        startValue, setMaxValueHandler, setStartValueHandler, error,
        setBtnOnclickHandler,
    }) => {

     return (
        <StyledCountSet>
            <SetBlock>
                <CountSetValue title={'max value'}
                               value={maxValue}
                               onChange={setMaxValueHandler}
                               error={error}/>
                <CountSetValue title={'start value'}
                               value={startValue}
                               onChange={setStartValueHandler}
                               error={error}/>
            </SetBlock>
            <BtnBlock>
                <Button content={'set'}
                        onClickHandler={setBtnOnclickHandler}
                        isDisabled={settingsDisabled}
                />
            </BtnBlock>
        </StyledCountSet>
    );
};

const StyledCountSet = styled.div`
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

