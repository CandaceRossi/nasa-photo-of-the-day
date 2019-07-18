import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

const ButtonWidth = styled.div`
  margin: 0 auto;
  width: 300px;
  padding: 40px 70px;
  display: flex;
  justify-content: center;
`;

const ButtonExampleLabeledBasicShorthand = () => (
  <div>
    <button>
      color="red" content="Like" icon="heart" label=
      {{ basic: true, color: "red", pointing: "left", content: "2,048" }}
    </button>
    <button>
      basic color="blue" content="Fork" icon="fork" label=
      {{
        as: "a",
        basic: true,
        color: "blue",
        pointing: "left",
        content: "2,048"
      }}
    </button>
  </div>
);

function Buttons() {
  return (
    <div>
      <div class="ui labeled button">
        <button class="ui red button" tabindex="0">
          <i aria-hidden="true" class="heart icon" />
          Like
        </button>
        <div class="ui red left pointing basic label">2,048</div>
      </div>
      <div class="ui labeled button">
        <button class="ui blue basic button" tabindex="0">
          <i aria-hidden="true" class="fork icon" />
          Share
        </button>
        <a class="ui blue left pointing basic label">2,048</a>
      </div>
    </div>
  );
}
export default Buttons;
