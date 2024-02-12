import React from 'react';
import {Button} from "../button/button";
import {S} from './count_styles'

type CountPropsType = {
    incCount: (num: number) => void
    resetCount: () => void
    count: number
    plusDisabled: boolean
    resetDisabled: boolean
    maxNumber: number
    error: boolean
    viewHelp: boolean
}

export const Count: React.FC<CountPropsType> = (
    {
        incCount,
        resetCount,
        count,
        plusDisabled,
        resetDisabled,
        maxNumber,
        error,
        viewHelp
    }) => {

    const intCountHandler = () => {
        incCount(count)
    }
    const resetCountHandler = () => {
        resetCount()
    }
    const countIsMaximal = count === maxNumber

    const showText = () => {
        if (error) {
            return <p style={{color: 'red', fontSize: '24px'}}>
                Incorrect value! <br/> The value cannot be lower than 0, or higher than the max value</p>
        } else if (viewHelp) {
            return <p style={{color: 'rgb(45, 126, 117)', fontSize: '24px'}}>
                Enter values and press 'set'</p>
        } else {
            return <span>{count}</span>
        }
    }

    return (
        <S.Count>
            <S.CountNumber className={`count ${countIsMaximal ? 'red' : ''}`}>{showText()}</S.CountNumber>

            <S.BtnBlock>
                <Button content='+'
                        onClick={intCountHandler}
                        disabled={plusDisabled}
                />
                <Button content='reset'
                        onClick={resetCountHandler}
                        disabled={resetDisabled}
                />
            </S.BtnBlock>
        </S.Count>
    );
};