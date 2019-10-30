import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ people, deletePerson, editPerson }) => {
  return (
    <React.Fragment>
      <h2>All People</h2>

      {people.map(person => (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr key={person.id}>
              <td>{person.id}</td>
              <td> {person.name}</td>

              <a href="#/" onClick={(e) => deletePerson(person.id)}> delete </a>

              <a href="#/" onClick={() => editPerson(person.id)}> edit </a>
            </tr>
          </tbody>
        </table>
      ))}

    </React.Fragment>
  );
};
export default TodoList;

TodoList.propTypes = {
  person: PropTypes.array
}
