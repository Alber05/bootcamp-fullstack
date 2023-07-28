import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const initialState = {
  name: "",
  number: "",
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState(initialState);

  const [showFilteredPersons, setShowFilteredPersons] = useState(persons);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      console.log(response);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        persons={persons}
        setShowFilteredPersons={setShowFilteredPersons}
      />
      <h1>Add a new</h1>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        initialState={initialState}
      />
      <h2>Numbers</h2>
      {showFilteredPersons.map((person) => (
        <Persons person={person} key={person.id} />
      ))}
    </div>
  );
};

export default App;
