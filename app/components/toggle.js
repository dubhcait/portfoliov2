import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "./";

const DisplayLabel = styled.div(props => {
  const base = {
    borderRadius: "50%",
    width: "1em",
    height: "1em",
    position: "absolute",
    background: "#c34a4a",
    transition: "0.4s ease",
    top: "1.5px",
    left: "2.5px"
  };

  if (props.checked) {
    return { ...base, left: "30px", background: "#8bc34a" };
  }
  return base;
});

const Input = styled.input`
  height: 40px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 40px;
`;

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
`;

const LableHtml = styled.label`
  width: 3em;
  background: #2e394d;
  height: 1.25em;
  display: inline-block;
  border-radius: 50px;
  margin: 5px;
  position: relative;
  transition: all 0.3s ease;
  transform-origin: 20% center;
  cursor: pointer;
`;
const Toggle = () => {
  const [gameMode, setGameMode] = useState(false);
  return (
    <>
      <ToggleWrapper className="toggle-wrapper">
        <Text style={{ margin: 0 }} className="name">
          Game Mode
        </Text>
        <Input
          id="checkcross"
          type="checkbox"
          value={gameMode}
          onChange={() => setGameMode(!gameMode)}
        />
        <LableHtml className="toggle-item" htmlFor="checkcross">
          <DisplayLabel className="check" checked={gameMode} />
        </LableHtml>
      </ToggleWrapper>
    </>
  );
};

export default Toggle;

/* //////////// checked
        left: 68px;
		transform: rotate(360deg);
		background: #c34a4a; 8bc34a
		&:before {
			width: 27px;
			transform: rotate(-45deg) translate(-8px, 18px);
    
		}
		&:after {
			width: 27px;
    	transform: rotate(45deg) translate(18px, 8px);
		} */
