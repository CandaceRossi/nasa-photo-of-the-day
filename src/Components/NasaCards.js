import React from "react";
import styled from "styled-components";

const CardBg = styled.div`
  width: 800px;
  margin: 0 auto;
  background-image: linear-gradient(to bottom, black, #2c3e50);
  border-radius: 7px;
  text-align: center;
  padding: 20px 20px;
`;
const TextStyle = styled.div`
  color: orange;
  font-size: 2.3rem;
  text-shadow: 2px 2px slategray;
  font-style: sans-serif;
`;
function NasaCards(props) {
  const data = props.data;
  return (
    <CardBg>
      <TextStyle>{data.title}</TextStyle>
      <img src={data.url} style={{ maxWidth: "450px" }} />
      <TextStyle>{data.date}</TextStyle>
      <div>{data.copyright}</div>
    </CardBg>
  );
}

export default NasaCards;
