import React, { useState, useEffect } from "react";

function People(props) {
  const [peopleData, setPeopleData] = useState({});
  // Do loading
  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then((data) => {
        setPeopleData(data);
      });
      // Catch errors
  }, [props.url]);

  return (
    <div className="data">
      <div className="info">
        <span className="title">Name: </span>
        <span className="value">
          {JSON.stringify(peopleData.name || "Loading...", null, 2)}
        </span>
      </div>
      <div className="info">
        <span className="title">Height: </span>
        <span className="value">
          {JSON.stringify(peopleData.height || "Loading...", null, 2)}
        </span>
      </div>
      <div className="info">
        <span className="title">Weight: </span>
        <span className="value">
          {JSON.stringify(peopleData.mass || "Loading...", null, 2)}
        </span>
      </div>
      <div className="info">
        <span className="title">Hair Color: </span>
        <span className="value">
          {JSON.stringify(peopleData.hair_color || "Loading...", null, 2)}
        </span>
      </div>
      <div className="info">
        <span className="title">Skin Color: </span>
        <span className="value">
          {JSON.stringify(peopleData.skin_color || "Loading...", null, 2)}
        </span>
      </div>
      <div className="info">
        <span className="title">Eye Color: </span>
        <span className="value">
          {JSON.stringify(peopleData.eye_color || "Loading...", null, 2)}
        </span>
      </div>
      <div className="info">
        <span className="title">Birth Year: </span>
        <span className="value">
          {JSON.stringify(peopleData.birth_year || "Loading...", null, 2)}
        </span>
      </div>
      <div className="info">
        <span className="title">Gender: </span>
        <span className="value">
          {JSON.stringify(peopleData.gender || "Loading...", null, 2)}
        </span>
      </div>
    </div>
  );
}
export default People;
