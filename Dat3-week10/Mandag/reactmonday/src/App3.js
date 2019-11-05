import React from 'react';
import PropTypes from 'prop-types';
import { names } from "./file2";


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props) {
    const { firstName, lastName, email } = props.person;
    return (
        <div>
            <h1>Welcome, {firstName} {lastName}, {email}</h1>
        </div>
    );
}

const persEr1 = { firstName: "Jane", email: "j@wonnegut.dk", phone: "12345" };
const persEr2 = { firstName: "Jane" };

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
            <hr />
            Errors:
            <Welcome />
            <Welcome name={69} />
            <hr />
            <WelcomePerson person={names[0]} />
            <WelcomePerson person={names[1]} />
            <WelcomePerson person={names[2]} />
            <hr />
            Errors:

            <WelcomePerson person={persEr1} />
            <WelcomePerson person={persEr2} />

            <hr />

            {names.map((x, index) => <WelcomePerson key={index} person={x} />)}
        </div>
    );
}



Welcome.propTypes = {
    name: PropTypes.string.isRequired
}

Welcome.defaultProps = {
    name: 'Stranger'
};

WelcomePerson.defaultProps = {
    firstName: 'Strange',
    lastName: 'Danger',
    email: 'strangerdanger@email.dk'
}

WelcomePerson.propTypes = {
    person: PropTypes.element.isRequired &&
        PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired
        })
}






export default App;