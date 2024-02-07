import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Count} from "./components/count/Count";
import {CountSet} from "./components/countSet/CountSet";



function App() {
    const [plusDisabled, setPlusDisabled] = useState<boolean>(false)
    const [resetDisabled, setResetDisabled] = useState<boolean>(true)

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

    //SetCount
    const [settingsDisabled, setSettingsDisabled] = useState<boolean>(true)
    const [maxValue, setMaxValue] = useState<number>(1)
    const [startValue, setStartValue] = useState<number>(0)
    const [count, setCount] = useState<number>(startValue)
    const [error, setError] = useState<boolean>(false)
    const [help, setHelp] = useState<boolean>(false)

    const setBtnOnclickHandler = () => {
        console.log('click')
        setMaxValue(maxValue)
        setStartValue(startValue)
        setCount(startValue)
        setHelp(false)
    }

    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSettingsDisabled(false)
        const inputValue = +e.currentTarget.value

        if (inputValue <= startValue) {
            setError(true)
            setSettingsDisabled(true)
        } else {
            setMaxValue(inputValue)
            setError(false)
            setHelp(true)
        }
    }
    const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSettingsDisabled(false)
        const inputValue = +e.currentTarget.value

        if (inputValue < 0 || inputValue >= maxValue) {
            setError(true)
            setSettingsDisabled(true)
        } else {
            setStartValue(inputValue)
            setError(false)
            setHelp(true)
        }
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
                   help={help}
            />
        </div>
    )
}

export default App;
