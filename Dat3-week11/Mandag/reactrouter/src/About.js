import React from 'react';
import { Link } from "react-router-dom";
import data from './data/Data.json';

export default function About({ match }) {
    const info = data.users.find((u, index) => index == match.params.personId);
    return (
        <div>
            <h1>Details about {info.first} {info.last}</h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={info.picture.large} alt="Profile"></img>
                        </td>
                    </tr>
                    <tr>
                        <td><p>First name: </p></td>
                        <td>{info.first}</td>
                    </tr>

                    <tr>
                        <td><p>Last name: </p></td>
                        <td>{info.last}</td>
                    </tr>

                    <tr>
                        <td><p>Gender: </p></td>
                        <td>{info.gender}</td>
                    </tr>

                    <tr>
                        <td><p>Date of Birth: </p></td>
                        <td>{info.dob}</td>
                    </tr>

                    <tr>
                        <td>
                            <hr />
                        </td>
                    </tr>

                    <tr>
                        <td><p>Email: </p></td>
                        <td><p>{info.email}</p></td>
                    </tr>

                    <tr>
                        <td><p>Phone: </p></td>
                        <td><p>{info.phone}</p></td>
                    </tr>

                    <tr>
                        <td><p>Cell: </p></td>
                        <td>{info.cell}</td>
                    </tr>

                    <tr>
                        <td>
                            <hr />
                        </td>
                    </tr>


                    <tr>
                        <td><p>Street : </p></td>
                        <td>{info.street}</td>
                    </tr>

                    <tr>
                        <td><p>City: </p></td>
                        <td>{info.city}</td>
                    </tr>

                    <tr>
                        <td><p>State: </p></td>
                        <td>{info.state}</td>
                    </tr>

                    <tr>
                        <td><p>zip: </p></td>
                        <td>{info.zip}</td>
                    </tr>

                </tbody>
            </table>
            <Link to="/all">Go back</Link>
        </div>
    )
}