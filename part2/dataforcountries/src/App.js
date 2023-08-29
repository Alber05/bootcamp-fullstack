import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [matchCountries, setMatchCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  useEffect(() => {
    if (search.trim() !== "") {
      setMatchCountries(
        countries.filter((el) =>
          el.name.common.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setMatchCountries([]);
    }
  }, [countries, search]);

  const handleChangle = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1>Find a country</h1>
      <input type="text" value={search} onChange={handleChangle} />
      <Countries matchCountries={matchCountries} />
    </div>
  );
}

export default App;
