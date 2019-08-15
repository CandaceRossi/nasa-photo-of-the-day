import React from "react";
import NasaCard from "./NasaCards";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 750px;
  height: 750px;
  margin: 0 auto;
  background: purple;
`;
function NasaGrid(props) {
  return (
    <StyledDiv>
      <NasaCard data={props.planets} />
    </StyledDiv>
  );
}
export default NasaGrid;

//Old work
// import React from "react";
// import NasaCards from "./NasaCards";
// function NasaGrid(props) {
//   return (
//     <div>
//       <NasaCards data={props.displayState} />
//     </div>
//   );
// }
// export default NasaGrid;

//title={props.title}
//img={props.url}
// date={props.date}
// explanation={props.explanation}
