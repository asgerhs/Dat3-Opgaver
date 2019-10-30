import React, { useState } from "react";
import './App.css';

function NumberList({ numbers }) {
    console.log("--NUMBERS -->", numbers)
    const listItems = numbers.map((n) => <ListItem key={n} value={n} />);
    return listItems;
}

function NumberTable({ numbers }) {
    const tableItems = numbers.map(n => <TableItem key={n} value={n} />);
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Numbers
                    </th>
                </tr>
            </thead>
            <tbody>
                {tableItems}
            </tbody>
        </table>
    )

}
function ListDemo(props) {
    console.log(props.numbers)
    return (
        <div>
            <h2>All numbers passed in via props</h2>

            <NumberList numbers={props.numbers} />
            <NumberTable numbers={props.numbers} />

        </div>
    );
}

function ListItem(props) {
    return <li>{props.value}</li>;
}

function TableItem(props) {
    return <tr><td>{props.value}</td></tr>
}

export default function App() {
    const [numbers] = useState([1, 2, 3, 4]);
    return <ListDemo numbers={numbers} />;
}
