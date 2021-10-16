import React from "react";
import { Card, Content } from "semantic-ui-react";
import styled from "styled-components";

const StyledDiv = styled.div`

    display: flex;
    justify-content: center !important;
    width: 650px !important;
    height: auto;
    margin: 0px;
    margin-top: 35px;
`;

function NasaCard(props) {
  return (
    <StyledDiv>
      <Card>
        {/* <Image className="ui medium image" src={props.data.url} wrapped ui={false} /> */}
        
        <Card.Content
          style={{
            height: "500px",
            backgroundImage: `url(${(props.data.url)})`,
            backgroundSize: "cover",
          }}
        />
        {/* </Card.Content> */}
          <Card.Header style={{width: "100%", fontSize: "1.5rem", display:"flex", justifyContent: "center", margin:"0 auto", marginTop:"15px"}}>{props.data.title}</Card.Header>
          <Card.Meta style={{fontSize:"1.3rem", margin: "0px", marginBottom: "10px"}}>
            <span>{props.data.date}</span>
          </Card.Meta>
          <Card.Description style={{width: "100%", margin: "0 auto", marginBottom: "25px"}}>{props.data.explanation}</Card.Description>
        {/* </Card.Content> */}
      </Card>
   </StyledDiv>
  );
}
export default NasaCard;
