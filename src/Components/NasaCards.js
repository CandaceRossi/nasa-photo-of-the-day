import React from "react";

function NasaCards(props) {
  const data = props.data;
  return (
    <div>
      <div>{data.title}</div>
      <img src={data.url} style={{ maxWidth: "250px" }} />
      <div>{data.date}</div>
      <div>{data.copyright}</div>
    </div>
  );
}

export default NasaCards;
