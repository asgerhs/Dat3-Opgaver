import React from 'react';
import { Link } from "react-router-dom";
import data from "./data/Data.json";

export default function AllUsers() {
    return (
        <div>
            <h3>All Users</h3>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Overview</th>
                    </tr>
                </thead>
                <tbody>
                    {data.users.map((person, index) => {
                        return (
                            < tr key={index}>
                                <td>
                                    <img src={person.picture.thumbnail} alt="alt" />
                                </td>
                                <td>
                                    {person.title}. {person.first} {person.last}
                                </td>
                                <td>
                                    <Link to={`/details/${index}`}>More Info</Link>
                                </td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td>
                            <Link to={"/"}>Go Back</Link>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div >

    )
}