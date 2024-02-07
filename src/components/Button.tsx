import React from 'react';
import styled from "styled-components";

type ButtonPropsType = {
    content: string
    onClickHandler: () => void
    isDisabled?: boolean
}
export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <StyledButton onClick={props.onClickHandler}
                      disabled={props.isDisabled}>
            {props.content} </StyledButton>
    );
};

const StyledButton = styled.button`
  width: 150px;
  height: 50px;
  font-size: 30px;
  border: none;
  background-color: rgb(45, 126, 117);
  border-radius: 5px;
  cursor: pointer;
  color: white;

  &[disabled] {
    background-color: rgba(45, 126, 117, 0.5);
  }
`