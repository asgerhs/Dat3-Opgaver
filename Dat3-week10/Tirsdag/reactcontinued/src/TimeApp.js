import React, { useEffect, useState } from 'react';
import "./App.css";

function App() {

    const [date, setDate] = useState(new Date().toLocaleTimeString());


    useEffect(() => {
        const clear = setInterval(() => {
            setDate(new Date().toLocaleTimeString())
        }, 1000)
        return function () {
            console.log("clear");
            clearInterval(clear);
        }
    }, [])
    return (
        <div>
            <h3>The time is: </h3>
            <h2>It is {date}.</h2>
        </div>
    )
}

export default App;