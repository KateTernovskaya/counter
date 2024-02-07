import React from 'react';
import {S} from './Button_Styles'

type ButtonPropsType = {
    content: string
    onClickHandler: () => void
    isDisabled?: boolean
}
export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <S.Button onClick={props.onClickHandler}
                  disabled={props.isDisabled}>
            {props.content} </S.Button>
    );
};