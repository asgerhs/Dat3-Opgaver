import React, { useState } from 'react';

const redborder = {
    border: '2px solid red',
    width: '400px',
    margin: '5px'
}

const parentborder = {
    border: '2px solid green',
    width: '414px'
}

const blueborder = {
    border: '2px solid blue',
    width: '400px',
    margin: '5px'
}

export default StateDemo = () => {
    const [names, setNames] = useState();
    const update = (event => {
        const name = event.target.value;
        setNames({ name });
    })

    return (<div style={parentborder}>
        <h2>Parent componet holding the names</h2>
        <InputComp update={update}></InputComp>
        <ShowComp name={names.name}></ShowComp>
    </div>);
}

const InputComp = (props) => {
    return (<div style={redborder}>
        <input type="text" onChange={props.update} placeholder="write input to show in sibling component" />
    </div>);
}

const ShowComp = (props) => {
    return <div style={blueborder}>Show content:
        {props.name}
    </div>
}
