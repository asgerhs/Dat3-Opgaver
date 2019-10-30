import React, { useState } from "react";

function MemberTable({ members }) {
    const listMembers = members.map((x, index) => <TableItem key={index} name={x.name} age={x.age} />);
    return (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                </tr>
            </thead>
            <tbody>
                {listMembers}
            </tbody>
        </table>
    );
}

function TableItem(props) {
    return <tr><td>{props.name}</td><td>{props.age}</td></tr>

}

function MemberDemo(props) {
    const members = MemberTable(props);
    return (
        <div>
            <h1>All Members</h1>
            {members}
            {members[1]}
        </div>
    );
}

export default function App() {
    const initialMembers = [{ name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }];
    const [members, setMembers] = useState(initialMembers)

    return (<MemberDemo members={members} />);
}

