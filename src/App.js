import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaGrid from "./Components/NasaGrid";
import styled from "styled-components";

const WebPg = styled.div`
  background-image: url("https://images.unsplash.com/photo-1518818419601-72c8673f5852?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  background-repeat: no-repeat;
  background-size: cover;
`;

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
    <WebPg className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <NasaGrid displayState={displayState} />;
    </WebPg>
  );
}

export default App;
