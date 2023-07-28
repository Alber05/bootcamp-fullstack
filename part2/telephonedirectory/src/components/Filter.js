import React, { useState, useEffect } from "react";

const Filter = ({ persons, setShowFilteredPersons }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setShowFilteredPersons(
      search
        ? persons.filter((person) =>
            person.name.toLowerCase().includes(search.toLowerCase())
          )
        : persons
    );
  }, [search, persons, setShowFilteredPersons]);

  return <input type="text" value={search} onChange={handleSearch} />;
};

export default Filter;
