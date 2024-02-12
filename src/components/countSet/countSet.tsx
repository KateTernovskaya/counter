import React, {ChangeEventHandler} from 'react';
import {Button} from "../button/button";
import {CountSetValue} from "./countSetValue";
import {S} from './countSet_styles'

type CountSetPropsType = {
    settingsDisabled: boolean
    maxValue: number
    startValue: number
    setMaxValueHandler: ChangeEventHandler<HTMLInputElement>
    setStartValueHandler: ChangeEventHandler<HTMLInputElement>
    error: boolean
    setBtnOnclickHandler: () => void
}

export const CountSet: React.FC<CountSetPropsType> = (
    {
        settingsDisabled,
        maxValue,
        startValue,
        setMaxValueHandler,
        setStartValueHandler,
        error,
        setBtnOnclickHandler,
    }) => {

    return (
        <S.CountSet>
            <S.SetBlock>
                <CountSetValue title='max value'
                               value={maxValue}
                               onChange={setMaxValueHandler}
                               error={error}/>
                <CountSetValue title='start value'
                               value={startValue}
                               onChange={setStartValueHandler}
                               error={error}/>
            </S.SetBlock>
            <S.BtnBlock>
                <Button content='set'
                        onClick={setBtnOnclickHandler}
                        disabled={settingsDisabled}
                />
            </S.BtnBlock>
        </S.CountSet>
    );
};