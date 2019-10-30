import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


let app = <App />;

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
            <a href="/" id="app1">
                ex1
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
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));


