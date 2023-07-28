import React from "react";

const Persons = ({ person }) => {
  return (
    <p>
      {person.name} <small>{person.number}</small>
    </p>
  );
};

export default Persons;
