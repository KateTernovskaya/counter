import React, {ChangeEvent} from 'react';
import {S} from './CountSet_Styles'

type CountSetValuePropsType = {
    title: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    error: boolean
}

export const CountSetValue: React.FC<CountSetValuePropsType> =
    ({title, value, onChange, error}) => {

        return (
            <div>
                <S.CountSetValue>
                    <span>{title}:</span>
                    <input type="number"
                           value={value}
                           onChange={onChange}
                           className={error ? 'error' : ''}/>
                </S.CountSetValue>
            </div>
        );
    };