import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Grid,
  GridItem,
  MinorTitle,
  Modal,
  ProjectView,
  SubTitle,
  Text,
  Title,
  Toggle,
} from "./components";
import "./index.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showItem, setShowItem] = useState("");

  const onGrideItemCLick = (project) => {
    setShowItem(project);
    setShowModal(true);
  };
  return (
    <>
      <section style={{ position: "relative", paddingBottom: "20px" }}>
        {/* <Game /> */}
        {showModal && (
          <Modal
            setShowModal={setShowModal}
            canClose={true}
            showItem={showItem}
          >
            <ProjectView project={showItem} />
          </Modal>
        )}
        {/* <Toggle /> */}
        <Title>Kate O'Brien</Title>
        <SubTitle>Full Stack Developer</SubTitle>
        <Text>
          I aim to ask good question because the right solution to the wrong
          problem isn’t much use. Value is something we have to chase as
          developers. It’s an activity I love.
        </Text>
        <MinorTitle>Experience</MinorTitle>
        <Text style={{ marginTop: 0 }}>
          Fullstack developer @{" "}
          <a href="https://fluidly.com/" target="_blank">
            Fluidly
          </a>
          <br /> Volunteer developer @
          <a
            href="https://github.com/PrideInLondon/pride-london-web"
            target="_blank"
          >
            {" "}
            PrideinLondon
          </a>
          <br /> Founders Program @{" "}
          <a href="https://www.foundersandcoders.com/" target="_blank">
            Founders&Coders
          </a>
          <br />
          BootCamp @{" "}
          <a href="https://www.foundersandcoders.com/" target="_blank">
            Founders&Coders
          </a>
        </Text>
        <Text>Check out some of my previous work.</Text>
        <Text>
          If you have any cool opertunities, give a shout! My email is
          dubhcait@live.ie
        </Text>
        <li
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            position: "absolute",
            bottom: 0,
          }}
        >
          <Text>
            {" "}
            Icons from{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            and{" "}
            <a
              href="https://www.flaticon.com/authors/roundicons"
              title="Roundicons"
            >
              Roundicons
            </a>
          </Text>
        </li>
      </section>
      <Grid className="">
        <GridItem
          source="https://i.imgur.com/mziz9e1.jpg"
          onGrideItemCLick={onGrideItemCLick}
          project="project1"
        />
        <GridItem
          source="https://i.imgur.com/edRqeaz.png"
          onGrideItemCLick={onGrideItemCLick}
          project="project2"
        />
        <GridItem
          source="https://i.imgur.com/TSLm7vn.jpg"
          onGrideItemCLick={onGrideItemCLick}
          project="project3"
        />
        <GridItem
          source="https://i.imgur.com/TGL28vT.png"
          onGrideItemCLick={onGrideItemCLick}
          project="project4"
        />
        <GridItem
          source="https://i.imgur.com/I63HA3P.jpg"
          onGrideItemCLick={onGrideItemCLick}
          project="project5"
        />
        <GridItem
          source="https://i.imgur.com/SEhDqhj.png"
          onGrideItemCLick={onGrideItemCLick}
          project="project6"
        />
        <GridItem
          source="https://i.imgur.com/5PHOL9s.jpg"
          onGrideItemCLick={onGrideItemCLick}
          project="project7"
        />
        <GridItem
          source="https://i.imgur.com/z5ejMsI.png"
          onGrideItemCLick={onGrideItemCLick}
          project="project8"
        />
      </Grid>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
