import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './FormDemo';
import App2 from "./FormDemoMultiple";

let app = <App2 />;

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
            <a href="/" id="app1">
                FormDemo
      </a>{" "}
            &nbsp;
      <a href="/" id="app2">
                FormDemoMultiple
      </a>{" "}
            &nbsp;
      {app}
        </div>
    );
};

function handleSelect(event) {
    event.preventDefault();
    const id = event.target.id;
    switch (id) {
        case "app1":
            app = <App />;
            break;
        case "app2":
            app = <App2 />;
            break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


