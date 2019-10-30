import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ListDemoApp';
import App2 from './ListDemoApp2';
import App3 from './CounterApp';
import App4 from './TimeApp';
import App5 from './ChuckJokesApp';


let app = <App4 />;

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
            <a href="/" id="app">Numbers</a>{" "} &nbsp;
             <a href="/" id="app2">Members</a>{" "} &nbsp;
             <a href="/" id="app3">Counter</a>{" "} &nbsp;
             <a href="/" id="app4">Time</a>{" "} &nbsp;
             <a href="/" id="app5">Jokes</a>{" "} &nbsp;
        {app}
        </div>
    );
};

function handleSelect(event) {
    event.preventDefault();
    const id = event.target.id;
    switch (id) {
        case "app":
            app = <App />
            break;
        case "app2":
            app = <App2 />
            break;
        case "app3":
            app = <App3 />
            break;
        case "app4":
            app = <App4 />
            break;
        case "app5":
            app = <App5 />
            break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
