import React, {ChangeEvent} from 'react';
import {Button} from "../button/Button";
import {CountSetValue} from "./CountSetValue";
import {S} from './CountSet_Styles'

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
        <S.CountSet>
            <S.SetBlock>
                <CountSetValue title={'max value'}
                               value={maxValue}
                               onChange={setMaxValueHandler}
                               error={error}/>
                <CountSetValue title={'start value'}
                               value={startValue}
                               onChange={setStartValueHandler}
                               error={error}/>
            </S.SetBlock>
            <S.BtnBlock>
                <Button content={'set'}
                        onClickHandler={setBtnOnclickHandler}
                        isDisabled={settingsDisabled}
                />
            </S.BtnBlock>
        </S.CountSet>
    );
};