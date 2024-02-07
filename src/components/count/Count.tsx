import React from 'react';
import {Button} from "../button/Button";
import {S} from './Count_Styles'

export type CountProps = {
    incCount: (num: number) => void
    resetCount: () => void
    count: number
    plusDisabled: boolean
    resetDisabled: boolean
    maxNumber: number
    error: boolean
   // help: boolean
}

export const Count = (props: CountProps) => {
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
        <S.Count>
            <S.CountNumber className={`count ${countIsMaximal ? 'red' : ''}`}>{isError}</S.CountNumber>

            <S.BtnBlock>
                <Button content={'+'}
                        onClickHandler={intCountHandler}
                        isDisabled={props.plusDisabled}
                />
                <Button content={'reset'}
                        onClickHandler={resetCountHandler}
                        isDisabled={props.resetDisabled}
                />
            </S.BtnBlock>
        </S.Count>
    );
};