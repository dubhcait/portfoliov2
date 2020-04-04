import React from "react";
import styled from "styled-components";

const Grid = styled.ul`
  display: grid;
  grid-gap: 0;
  overflow: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100vh;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 33.3333333333%);

  @media (max-width: 60em) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 25%);
  }
`;

const GridImage = styled.img`
  display: block;
  height: 100%;
  max-width: 100%;
  width: 100%;
  object-fit: cover;
`;

const GridLink = styled.a`
  display: block;
  height: 100%;
`;

const GridItem = ({ source, onGrideItemCLick, project }) => (
  <li>
    <GridLink href="#" onClick={() => onGrideItemCLick(project)}>
      <GridImage src={source} alt="" />
    </GridLink>
  </li>
);

export { GridItem, GridImage };
export default Grid;
