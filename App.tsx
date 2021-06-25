import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Simulate} from "react-dom/test-utils";
import {randomBytes} from "crypto";

function TestComponent() {
    const [isChecked, setChecked] = React.useState<boolean>()
    const [value, setValue] = React.useState('')
    const [props, setTodo] = React.useState([
        {
            id: 1,
            text: 'React/TypeScript Todo List app',
            color: 'red'
        }
    ])

    const handleAdd = () => {
        setTodo(prev => [...prev, {id: 0, color: "blue", text: value}])
    }


    const element = props.map((prop, index) =>
        <div className="task-block" key={index}>
            <div className={prop.color}>
                <input type="checkbox" className="task-checkbox" checked={isChecked} onClick={() => setChecked}/>
                <div className="task-text">{prop.text}</div>
            </div>
        </div>
    )
    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)} type="text"/>
            <button onClick={() => handleAdd()}>Добавить</button>
            <div>{element}</div>
        </div>
    );
}

export default TestComponent;