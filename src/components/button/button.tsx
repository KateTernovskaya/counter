import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import {S} from './button_styles'

type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonPropsType = DefaultButtonProps & {
    content: string
}
export const Button: React.FC<ButtonPropsType> = (
    {
        content,
        ...restProps
    }) => {

    return (
        <S.Button {...restProps} >
            {content}
        </S.Button>
    );
};