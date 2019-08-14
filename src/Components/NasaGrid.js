import React from "react";
import NasaCard from "./NasaCards";

function NasaGrid(props) {
  return (
    <div>
      <NasaCard data={props.planets} />
    </div>
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
