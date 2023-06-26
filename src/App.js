import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";
import {
  originals,
  action,
  trending,
  comedy,
  horror,
  romance,
  documentaries,
} from "./urls";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost url={originals} title="Netflix Originals" />
      <Rowpost url={trending} title="Trending" isSmall />
      <Rowpost url={action} title="Action" isSmall />
      <Rowpost url={comedy} title="Comedy" isSmall />
      <Rowpost url={horror} title="Horror" isSmall />
      <Rowpost url={romance} title="Romance" isSmall />
      <Rowpost url={documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
