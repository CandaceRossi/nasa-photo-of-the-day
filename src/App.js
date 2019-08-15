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

//Old Work
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import NasaGrid from "./Components/NasaGrid";
// import styled from "styled-components";
// import Buttons from "./Buttons";

// const WebPg = styled.div`
//   background-image: url("https://images.unsplash.com/photo-1518818419601-72c8673f5852?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
//   background-repeat: no-repeat;
//   background-size: cover;
// `;
// const TextStyle = styled.p`
// padding-top: 20px;
// padding-bottom: 0px;
// color: white;
// text-align: center;
// font-size 3rem;
// text-shadow: 1px 1px slategray;
// font-style: sans-serif;
// `;
// function App() {
//   const [displayState, setDisplayState] = useState([]);
//   console.log("displayState", displayState);
//   useEffect(() => {
//     axios
//       .get(
//         "https://api.nasa.gov/planetary/apod?api_key=bUQejLy5bCxYfj5G4AZTMnERt4bix31L38akbKrG"
//       )
//       .then(response => {
//         console.log("stars", response);
//         const data = response.data;
//         console.log(data);
//         setDisplayState(data);
//       });
//   }, []);
//   return (
//     <WebPg className="App">
//       <TextStyle>Nasa's Photo of the Day 🚀!</TextStyle>
//       <NasaGrid displayState={displayState} />;
//       <Buttons className="Buttons" />
//     </WebPg>
//   );
// }

// export default App;
