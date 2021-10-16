import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import NasaGrid from "./Components/NasaGrid";
import { Container } from "semantic-ui-react";

function App() {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=bUQejLy5bCxYfj5G4AZTMnERt4bix31L38akbKrG"
      )
      .then(res => {
        const data = res.data;
        console.log("this is the data", data);
        setPlanets(data);
      });
  }, []);
  return (
    <div>
      <Container>
        <NasaGrid planets={planets} />
      </Container>
    </div>
  );
}

export default App;