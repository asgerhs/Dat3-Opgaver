import React from 'react';
import './App.css';

let count = 0;

function counter() {
  return (this.count)

}

function App() {
  return (
    <div className="App">

      <h1>Hippity hoppity what the uppity</h1>
      <button className="buttonCount" onClick={counter}>click me</button>
      <h1>{count}</h1>
    </div>
  );
}
console.log(count);

export default App;
