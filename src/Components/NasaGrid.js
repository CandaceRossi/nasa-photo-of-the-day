import React from "react";
import NasaCard from "./NasaCards";
import styled from "styled-components";

const StyledDiv = styled.div`

    display: flex;
    justify-content: center !important;
    width: 100% !important;
    height: 100%;
    margin: 0px;
`;
function NasaGrid(props) {
  return (
    <StyledDiv>
      <NasaCard data={props.planets} />
    </StyledDiv>
  );
}
export default NasaGrid;
