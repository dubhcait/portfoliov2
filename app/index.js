import React from "react";
import ReactDOM from "react-dom";
import {
  Title,
  SubTitle,
  Text,
  MinorTitle,
  Grid,
  GridImage
} from "./components";

import "./index.css";

const App = () => {
  return (
    <>
      <section>
        <Title>Kate O'Brien</Title>
        <SubTitle>Full-stack developer</SubTitle>
        <Text>
          I aim to ask good question because the right solution to the wrong
          problem isn’t much use. Value is something we have to chase as
          developers. It’s an activity I love.
        </Text>
        <MinorTitle>Experience</MinorTitle>
        <Text style={{ marginTop: 0 }}>
          Fullstack developer @ Fluidly <br /> Founders Program @
          Founders&Coders
          <br />
          BootCamp @ Founders&Coders
        </Text>
        <Text>Check out my previous work -----></Text>
        <Text>
          If you have any cool opertunities, give a shout! my email is
          dubhcait@live.ie
        </Text>
      </section>
      <Grid className="">
        <li>
          <a href="#">
            <GridImage
              src="https://camo.githubusercontent.com/0305b82409b925e9f9f1516f86b7d7dbc15d0803/68747470733a2f2f692e696d6775722e636f6d2f484645706630412e706e67"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="#">
            <GridImage
              src="https://camo.githubusercontent.com/8a13a7e972ffaa9137231c1a886d89de9b0b1036/68747470733a2f2f692e696d6775722e636f6d2f636354556336352e706e67"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="#">
            <GridImage src="https://i.imgur.com/SjEeQSH.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <GridImage src="https://i.imgur.com/SjEeQSH.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <GridImage src="https://i.imgur.com/lLJpxng.png" alt="" />>
          </a>
        </li>
        <li>
          <a href="#">
            <GridImage src="https://i.imgur.com/wjKlKEd.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <GridImage src="https://i.imgur.com/G2cx6xm.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <GridImage
              src="https://user-images.githubusercontent.com/3824082/33515921-50e4fd80-d7a4-11e7-9971-9afac36f02e1.png"
              alt=""
            />
          </a>
        </li>
      </Grid>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
