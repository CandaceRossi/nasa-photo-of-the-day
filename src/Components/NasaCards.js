import React from "react";
import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 750px;
  height: 750px;
  margin: 0 auto;
  background: purple;
`;

function NasaCard(props) {
  return (
    <StyledDiv>
      <Card>
        <Image src={props.data.url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.data.title}</Card.Header>
          <Card.Meta>
            <span>{props.data.date}</span>
          </Card.Meta>
          <Card.Description>{props.data.explanation}</Card.Description>
        </Card.Content>
      </Card>
    </StyledDiv>
  );
}
export default NasaCard;
//Old work
// import React from "react";
// import styled from "styled-components";

// const CardBg = styled.div`
//   width: 800px;
//   margin: 0 auto;
//   background-image: linear-gradient(to bottom, black, #2c3e50);
//   border-radius: 7px;
//   text-align: center;
//   padding: 10px 10px;
// `;
// const TextStyle = styled.div`
//   color: orange;
//   font-size: 2.3rem;
//   text-shadow: 1px 1px slategray;
//   font-style: sans-serif;
// `;
// function NasaCards(props) {
//   const data = props.data;
//   return (
//     <CardBg>
//       <TextStyle>{data.title}</TextStyle>
//       <img src={data.url} style={{ maxWidth: "450px" }} />
//       <TextStyle>{data.date}</TextStyle>
//       <div>{data.copyright}</div>
//     </CardBg>
//   );
// }

// export default NasaCards;
