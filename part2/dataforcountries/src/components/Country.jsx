import React, { useState } from "react";
import CountryInfo from "./CountryInfo";

const Country = ({ el }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <p key={el.name.common}>
        {el.name.common}{" "}
        <button onClick={handleShow}>{show ? "unshow" : "show"}</button>
      </p>
      {show ? <CountryInfo el={el} /> : null}
    </div>
  );
};

export default Country;
