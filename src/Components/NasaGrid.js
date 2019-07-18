import React from "react";
import NasaCards from "./NasaCards";
function NasaGrid(props) {
  return (
    <div>
      <NasaCards data={props.displayState} />
    </div>
  );
}
export default NasaGrid;
