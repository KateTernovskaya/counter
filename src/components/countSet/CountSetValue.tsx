import React, {ChangeEvent} from 'react';
import styled from "styled-components";



type CountSetValuePropsType = {
    title: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    error: boolean
}

export const CountSetValue: React.FC<CountSetValuePropsType> = ({title, value, onChange, error}) => {


    return (
        <div>
            <StyledCountSetValue>
                <span>{title}:</span>
                <input type="number"
                       value={value}
                       onChange={onChange}
                       className={error ? 'error' : ''} />
            </StyledCountSetValue>
        </div>
    );
};

const StyledCountSetValue = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  input {
    height: 40px;
    font-size: 20px;
    text-align: center;


    &.error {
      border: 2px solid red;
      outline: 2px solid red;
      background-color: rgba(255, 0, 0, 0.6);
    }


    &:focus {
      outline: rgb(45, 126, 117);
      border: 2px solid rgb(45, 126, 117);
    }
  }
`
