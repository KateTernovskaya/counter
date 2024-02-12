import React, {ChangeEventHandler} from 'react';
import {Button} from "../button/button";
import {CountSetValue} from "./countSetValue";
import {S} from './countSet_styles'

type CountSetPropsType = {
    maxValue: number
    startValue: number
    setMaxValueHandler: ChangeEventHandler<HTMLInputElement>
    setStartValueHandler: ChangeEventHandler<HTMLInputElement>
    setBtnOnclickHandler: () => void
}

export const CountSet: React.FC<CountSetPropsType> = (
    {
        maxValue,
        startValue,
        setMaxValueHandler,
        setStartValueHandler,
        setBtnOnclickHandler,
    }) => {

    const error = startValue < 0 || startValue >= maxValue

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
                        disabled={error}
                />
            </S.BtnBlock>
        </S.CountSet>
    );
};