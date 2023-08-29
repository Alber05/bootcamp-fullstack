import React from "react";
import CountryInfo from "./CountryInfo";
import Country from "./Country";

const Countries = ({ matchCountries }) => {
  if (matchCountries.length > 10) {
    return <p>To many matches, specify another filter</p>;
  }

  if (matchCountries.length > 1 && matchCountries.length <= 10) {
    return matchCountries.map((el) => <Country key={el.name.common} el={el} />);
  }

  if (matchCountries.length === 1) {
    return matchCountries.map((el) => (
      <CountryInfo el={el} key={el.name.common} />
    ));
  }
};

export default Countries;
