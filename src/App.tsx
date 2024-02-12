import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Count} from "./components/count/count";
import {CountSet} from "./components/countSet/countSet";

//Get From LocalStorage
const maxV = localStorage.getItem('maxValue')
const startV = localStorage.getItem('startValue')

export type textCountType = "Incorrect value" | "Enter values";

function App() {
    const [plusDisabled, setPlusDisabled] = useState<boolean>(false)
    const [resetDisabled, setResetDisabled] = useState<boolean>(true)
    const [maxValue, setMaxValue] = useState<number>(maxV !== null ? JSON.parse(maxV) : 1)
    const [startValue, setStartValue] = useState<number>(startV !== null ? JSON.parse(startV) : 0)
    const [count, setCount] = useState<textCountType | number>(startValue)

    //Count
    const incCount = (num: number) => {
        if (num < maxValue) {
            num++
            setCount(+num)
            setResetDisabled(false)
        }
        if (num === maxValue) {
            setPlusDisabled(true)
        }
    }
    const resetCount = () => {
        setCount(startValue)
        setPlusDisabled(false)
        setResetDisabled(true)
    }

    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Math.round(+e.currentTarget.value)
        setMaxValue(value)
        startValue < 0 || startValue >= value ? setCount("Incorrect value") : setCount("Enter values")
        setPlusDisabled(true)
        setResetDisabled(true)
    }
    const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Math.round(+e.currentTarget.value)
        setStartValue(value)
        value < 0 || value >= maxValue ? setCount("Incorrect value") : setCount("Enter values")
        setPlusDisabled(true)
        setResetDisabled(true)
    }

    const setBtnOnclickHandler = () => {
        setMaxValue(maxValue)
        setStartValue(startValue)
        setCount(startValue)
        setPlusDisabled(false)
        setResetDisabled(true)

        //localStorage
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }


    return (
        <div className="App">
            <CountSet
                maxValue={maxValue}
                startValue={startValue}
                setMaxValueHandler={setMaxValueHandler}
                setStartValueHandler={setStartValueHandler}
                setBtnOnclickHandler={setBtnOnclickHandler}
            />
            <Count
                incCount={incCount}
                resetCount={resetCount}
                count={count}
                plusDisabled={plusDisabled}
                resetDisabled={resetDisabled}
                maxNumber={maxValue}
            />
        </div>
    )
}

export default App;
