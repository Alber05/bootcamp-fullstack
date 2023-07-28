import React from "react";

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  initialState,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (persons.some((person) => person.name === newName.name)) {
      alert(`${newName} is already added to phoneBook`);
      setNewName(initialState);
      return;
    } else {
      setPersons([...persons, newName]);
      setNewName(initialState);
    }
  };

  const handleChange = (e) => {
    setNewName({ ...newName, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input
          type="text"
          name="name"
          value={newName.name}
          onChange={handleChange}
        />
      </div>
      <div>
        number:{" "}
        <input
          type="number"
          name="number"
          value={newName.number}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
