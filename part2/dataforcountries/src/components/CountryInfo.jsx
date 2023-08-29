import React, { useEffect, useState } from "react";
import axios from "axios";

const CountryInfo = ({ el }) => {
  const [weatherInfo, setWeatherInfo] = useState([]);

  const countryName = el.name.common;
  const apiKey = process.env.REACT_APP_API_KEY;

  const params = {
    key: apiKey,
    q: countryName,
  };

  useEffect(() => {
    if (!apiKey) {
      console.error("API key not defined!");
      return;
    }

    axios
      .get("http://api.weatherapi.com/v1/current.json", { params })
      .then((response) => {
        setWeatherInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div key={el.name.common}>
        <h2>{el.name.common}</h2>
        <p>capital: {el.capital[0]}</p>
        <p>population: {el.population}</p>
      </div>
      <div>
        <h3>Lenguages</h3>
        <ul>
          {" "}
          {Object.values(el.languages).map((language, idx) => (
            <li key={idx}>{language}</li>
          ))}
        </ul>
        <img src={el.flags.png} alt={`flag of ${el.name.common}`} />
      </div>
      <div>
        <h3>Weather in {el.name.common}i</h3>
        <p>Temperature: {weatherInfo?.current?.temp_c}</p>
        <img src={`https:${weatherInfo?.current?.condition?.icon}`} alt="" />
        <p>Wind direction {weatherInfo?.current?.wind_dir}</p>
      </div>
    </>
  );
};

export default CountryInfo;
