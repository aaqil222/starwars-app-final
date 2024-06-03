import React, { useState, useEffect } from "react";
import "./App.css";
import People from "./Components/People";
import Navbar from "./Components/Navbar";
import PeopleCounter from "./Components/PeopleCounter";
import Planets from "./Components/Planets";
import PlanetCounter from "./Components/PlanetCounter";
import Films from "./Components/Films";

function App() {
  const [peopleCount, setPeopleCount] = useState(1);
  const [planetCount, setPlanetCount] = useState(1);
  const [people, setPeople] = useState(true);
  const [planet, setPlanet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const LoadingScreen = () => {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">
          <img src="./loading-spinner.png" alt="Loading..." width={100} />
        </div>
        <p>Loading...</p>
      </div>
    );
  };

  function showPlanet() {
    setPlanet(true);
    setPeople(false);
  }
  function showPeople() {
    setPlanet(false);
    setPeople(true);
  }
  const selected = {
    backgroundColor: "#eee",
    color: "black",
    transform: "scale(1.3)",
    fontWeight: "bold",
  };

  const unSelected = {
    backgroundColor: "#ccc",
    color: "black",
  };

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <div className="tab-switcher">
            <button onClick={showPeople} style={planet ? unSelected : selected}>
              People
            </button>
            <button onClick={showPlanet} style={people ? unSelected : selected}>
              Planets
            </button>
          </div>
          <div className="container">
            {planet ? (
              <>
                <Planets
                  count={planetCount}
                  url={`https://swapi.dev/api/planets/${planetCount}`}
                />
                <PlanetCounter
                  count={planetCount}
                  setCount={setPlanetCount}
                  url={`https://swapi.dev/api/planets/`}
                />
              </>
            ) : (
              <>
                {" "}
                <People
                  count={peopleCount}
                  url={`https://swapi.dev/api/people/${peopleCount}`}
                />
                <PeopleCounter
                  count={peopleCount}
                  setCount={setPeopleCount}
                  url={`https://swapi.dev/api/people/`}
                />
              </>
            )}
          </div>
          <hr></hr>
          <Films url={`https://swapi.dev/api/films`} />
        </>
      )}
    </div>
  );
}

export default App;
