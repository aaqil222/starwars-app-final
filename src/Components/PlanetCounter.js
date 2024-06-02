import { useState, useEffect } from "react";

function PlanetCounter(props) {
  const[totalCount, setTotalCount] = useState(0)
  function next() {
    props.setCount(props.count + 1);
  }

  function previous() {
    props.setCount(props.count - 1);
  }

  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then((data) => {
        setTotalCount(data);
      });
      // Catch errors
  }, [props.url]);

  return (
    <div className="counter">
      <button
        onClick={previous}
        className="btn"
        disabled={props.count === 1 ? true : false}
      >
        &#8249;
      </button>
      <div className="currentCount">{props.count} / {totalCount.count}</div>
      <button
        onClick={next}
        className="btn"
        disabled={props.count === 60 ? true : false}
      >
        &#8250;
      </button>
    </div>
  );
}

export default PlanetCounter;
