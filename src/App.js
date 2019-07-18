import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import NasaGrid from "./Components/NasaGrid";

function App() {
  const [displayState, setDisplayState] = useState([]);
  console.log("displayState", displayState);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=bUQejLy5bCxYfj5G4AZTMnERt4bix31L38akbKrG"
      )
      .then(response => {
        console.log("stars", response);
        const data = response.data;
        console.log(data);
        setDisplayState(data);
      });
  }, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <NasaGrid displayState={displayState} />;
    </div>
  );
}

export default App;
