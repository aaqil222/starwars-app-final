import React, { useEffect, useState } from "react";

function Planets(props) {
  const [planetData, setPlanetData] = useState({});

  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then((data) => {
        setPlanetData(data);
      });
  }, [props.url]);

  return (
    <>
      <div className="data">
        <div className="info">
          <div className="title">Name: </div>
          <div className="value">
            {JSON.stringify(planetData.name || "Loading...", null, 2)}
          </div>
        </div>
        <div className="info">
          <div className="title">Climate: </div>
          <div className="value">
            {JSON.stringify(planetData.climate || "Loading...", null, 2)}
          </div>
        </div>
        <div className="info">
          <div className="title">Rotation Period: </div>
          <div className="value">
            {JSON.stringify(planetData.rotation_period || "Loading...", null, 2)}
          </div>
        </div>
        <div className="info">
          <div className="title">Orbital Period: </div>
          <div className="value">
            {JSON.stringify(planetData.orbital_period || "Loading...", null, 2)}
          </div>
        </div>
        <div className="info">
          <div className="title">Diameter: </div>
          <div className="value">
            {JSON.stringify(planetData.diameter || "Loading...", null, 2)}
          </div>
        </div>
        <div className="info">
          <div className="title">Gravity: </div>
          <div className="value">
            {JSON.stringify(planetData.gravity || "Loading...", null, 2)}
          </div>
        </div>
        <div className="info">
          <div className="title">Population: </div>
          <div className="value">
            {JSON.stringify(planetData.population || "Loading...", null, 2)}
          </div>
        </div>
        <div className="info">
          <div className="title">Terrain: </div>
          <div className="value">
            {JSON.stringify(planetData.terrain || "Loading...", null, 2)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Planets;
