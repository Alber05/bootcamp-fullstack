import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const initialState = {
  name: "",
  number: "",
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState(initialState);

  const [showFilteredPersons, setShowFilteredPersons] = useState(persons);

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
      {showFilteredPersons.map((person, index) => (
        <Persons person={person} key={index} />
      ))}
    </div>
  );
};

export default App;
