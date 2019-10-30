import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonList from "./TodoList"
import NewPerson from "./NewTodo"
import uuid from "uuid/v1";

function App() {
  const initialData = [
    { id: uuid(), name: "William Henningsen" },
    { id: uuid(), name: "Andreas Blomst" },
    { id: uuid(), name: "Martin Martinsen" }
  ]
  const [people, setPeople] = useState(initialData);
  const [newPerson, setNewPerson] = useState({ id: "", name: "" });
  console.log(people)

  const addPerson = person => {
    if (person.id === "") { // id=-1 Indicates a new object
      person.id = uuid();
      people.push(person);
    } else {//if id != "", it's an existing person. Find it and add changes
      let personToEdit = people.find(t => t.id === person.id);
      personToEdit.name = person.name;
    }
    setPeople([...people]);
    setNewPerson({ id: "", name: "" })
  };

  const deletePerson = (person) => {
    setPeople(people.filter(event => event.id !== person));
  };

  const editPerson = (person) => {
    setNewPerson({ id: person, todoText: "" });
  };

  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom: 25 }}>
        Props and Lifting State Demo
      </h2>

      <div className="row">
        <div className="col-6 allTodos">
          <PersonList people={people} editPerson={editPerson} deletePerson={deletePerson} />
        </div>
        <div className="col-5 new-person">
          <NewPerson
            addPerson={addPerson}
            nextPerson={newPerson}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
