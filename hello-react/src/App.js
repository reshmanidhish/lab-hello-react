import React from "react";
import "./App.css";
import Header from "./component/Header";
// import {Header} from "./component";
import iconOne from "./images/icon1.png";
import iconTwo from "./images/icon2.png";
import iconThree from "./images/icon3.png";
import iconFour from "./images/icon4.png";
function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <div>
          <img src={iconOne} alt="" />
          <h4>Declarative</h4>
          <p>React make it painless to create interactive UIs</p>
        </div>
        <div>
          <img src={iconTwo} alt="" />
          <h4>Components</h4>
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div>
          <img src={iconThree} alt="" />
          <h4>Single-Way</h4>
          <p>{"A set of immutable< values are added to the state"}</p>
        </div>
        <div>
          <img src={iconFour} alt="" />
          <h4>JSX</h4>
          <p>Statically typed designs to run in a modern browser</p>
        </div>
      </section>
    </div>
  );
}

export default App;
