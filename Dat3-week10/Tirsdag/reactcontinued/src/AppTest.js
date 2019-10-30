import React, { useState, useEffect, } from 'react';

export default function App() {

    const [count, setCount] = useState(0);
    const [runCounter, setRunCounter] = useState(false);


    useEffect(function () {
        if (runCounter === false) {
            return
        }
        const clear = setInterval(() => {
            setCount(count => count + 1)
        }, 500)

        //Hvis nødvending, Clean up code
        return () => {
            console.log("Cleaning up")
            clearInterval(clear)
        }
    }, [runCounter])

    return (
        <div>
            <h2>Couter Demo</h2>
            <button onClick={() => setRunCounter(!runCounter)}>Start Timer</button>
            <h2>{count}</h2>
        </div>
    )
}



