import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Count} from "./components/count/Count";
import {CountSet} from "./components/countSet/CountSet";

function App() {
    const [plusDisabled, setPlusDisabled] = useState<boolean>(false)
    const [resetDisabled, setResetDisabled] = useState<boolean>(true)
    const [maxValue, setMaxValue] = useState<number>(1)
    const [startValue, setStartValue] = useState<number>(0)
    const [count, setCount] = useState<number>(startValue)
    const [viewHelp, setViewHelp] = useState<boolean>(false)

    //Count
    const incCount = (num: number) => {
        if (num < maxValue) {
            num++
            setCount(num)
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
        setMaxValue(+e.currentTarget.value)
        setViewHelp(true)
    }
    const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
        setViewHelp(true)
    }

    const error = startValue < 0 || startValue >= maxValue
    const settingsDisabled =  error

    const setBtnOnclickHandler = () => {
        console.log('click')
        setMaxValue(maxValue)
        setStartValue(startValue)
        setCount(startValue)
        setViewHelp(false)
    }

    return (
        <div className="App">
            <CountSet
                settingsDisabled={settingsDisabled}
                maxValue={maxValue}
                startValue={startValue}
                setMaxValueHandler={setMaxValueHandler}
                setStartValueHandler={setStartValueHandler}
                error={error}
                setBtnOnclickHandler={setBtnOnclickHandler}
            />
            <Count incCount={incCount}
                   resetCount={resetCount}
                   count={count}
                   plusDisabled={plusDisabled}
                   resetDisabled={resetDisabled}
                   maxNumber={maxValue}
                   error={error}
                   viewHelp={viewHelp}
            />
        </div>
    )
}

export default App;
