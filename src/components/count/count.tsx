import React, {ReactNode} from 'react';
import {Button} from "../button/button";
import {S} from './count_styles'
import {textCountType} from "../../App";

type CountPropsType = {
    incCount: (num: number) => void
    resetCount: () => void
    count: textCountType | number
    plusDisabled: boolean
    resetDisabled: boolean
    maxNumber: number
}

export const Count: React.FC<CountPropsType> = (
    {
        incCount,
        resetCount,
        count,
        plusDisabled,
        resetDisabled,
        maxNumber,
    }) => {

    const intCountHandler = () => {
        incCount(+count)
    }
    const resetCountHandler = () => {
        resetCount()
    }
    const countIsMaximal = count === maxNumber

    const showText = (): ReactNode => {
        if (count === "Enter values") {
            return <S.CountNumber as='p' className='help'> Enter values and press 'set'</S.CountNumber>
        } else if (count === "Incorrect value") {
            return <S.CountNumber as='p' className='error'>Incorrect value! <br/>
                The value cannot be lower than 0, or higher than the max value</S.CountNumber>
        } else {
            return <S.CountNumber className={`count ${countIsMaximal ? 'red' : ''}`}>{count}</S.CountNumber>
        }
    }

    return (
        <S.Count>
            {showText()}
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