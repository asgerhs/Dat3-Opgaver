import React, { useState, useEffect } from 'react';
import './App.css';

function Counter(props) {

    const [count, setCount] = useState(parseInt(localStorage.getItem("count") || props.InitialValue));

    useEffect(() => {
        localStorage.setItem("count", count);
    })

    return (
        <div>
            <p>You've clicked me {count} times! Wow!</p>
            <button onClick={() => setCount(count + props.ammount)}>Give me up!</button>
            <br />
            <button onClick={() => setCount(count - props.ammount)}>Let me down!</button>
        </div>
    )
}

export default function App() {
    return <Counter InitialValue={9} ammount={12} />
}
