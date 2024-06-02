import React from "react";

function Navbar() {
  let time = new Date();
  let hours = time.getHours();
  let greeting;
  if (hours <= 12) {
    greeting = "Morning";
  } else if (hours <= 15) {
    greeting = "Afternoon";
  } else if (hours <= 19) {
    greeting = "Evening";
  } else if (hours <= 24) {
    greeting = "Night";
  } else {
    greeting = "Hello!";
  }
  return (
    <nav className="navbar">
      <div className="greeting">Good {greeting}</div>
      <img src="./starwars-nav.png" alt="Star wars logo" className="nav-logo"/>
    </nav>
  );
}

export default Navbar;
