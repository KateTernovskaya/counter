import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {S} from './countSet_styles'

type DefaultInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type CountSetValuePropsType = DefaultInputProps & {
    title: string
    error: boolean
}

export const CountSetValue: React.FC<CountSetValuePropsType> =
    ({
         title,
         error,
         ...restProps
     }) => {

        return (
            <div>
                <S.CountSetValue>
                    <span>{title}:</span>
                    <input type="number"
                           className={error ? 'error' : ''}
                           {...restProps}
                    />
                </S.CountSetValue>
            </div>
        );
    };