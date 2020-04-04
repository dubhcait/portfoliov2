import React from "react";
import styled from "styled-components";
import projectDetails from "../util/projectDetails";
import { Text, Title } from "./index";

const Atag = styled.a`
  color: inherit;
  display: inline;
`;

const ProjectView = ({ project }) => {
  const details = projectDetails[project];
  const width = "430px";

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap-reverse",
          height: "100vh",
        }}
      >
        <div>
          <Title>{details.title}</Title>
          <Text width={width}>{details.description}</Text>
          <Text>Retrospective:</Text>
          <Text width={width}>{details.retro}</Text>
          <Text>{details.software}</Text>
          <Text>
            Code:<Atag href={details.code}>here</Atag>
          </Text>
          {details.url && (
            <Text>
              Live version:<Atag href={details.url}>here</Atag>
            </Text>
          )}
        </div>
        <a href={details.code} target="_blank">
          <img src={details.img} atl={details.title} width="400px" />
        </a>
      </div>
    </>
  );
};

export default ProjectView;
