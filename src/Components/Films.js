// Components/Films.js
import React, { useEffect, useState } from "react";

function Films(props) {
  const [films, setFilms] = useState([]);
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        setFilms(data.results);
      });
  }, [props.url]);

  return (
    <div className="films">
      <h2 className="films-title">Star Wars Films</h2>
      <div className="film-accordion">
        {films.map((film, index) => (
          <div className="accordion" onClick={() => toggleAccordion(index)} key={index}>
            <div className="accordion-title">
              <h3>{film.title}</h3>
              <span>{isOpen === index ? "-" : "+"}</span>
            </div>
            {isOpen === index && (
              <div className="accordion-stuff">
                <ul>
                  <li>
                    <span className="film-label">Director:</span>{" "}
                    {film.director}
                  </li>
                  <li>
                    <span className="film-label">Producer:</span>{" "}
                    {film.producer}
                  </li>
                  <li>
                    <span className="film-label">Release Date:</span>{" "}
                    {film.release_date}
                  </li>
                  <li>
                    <span className="film-label">Opening Crawl:</span>{" "}
                    {film.opening_crawl}
                  </li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Films;
