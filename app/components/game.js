import React from "react";
import styled from "styled-components";

const color = "lightgray";
const borderRadius = "10px";

const First = styled.i`
  border-top-left-radius: ${borderRadius};
  background-position: left top !important;
`;

const Secon = styled.i`
  background-position: center top !important;
`;

const Third = styled.i`
  border-top-right-radius: ${borderRadius};
  background-position: right top !important;
`;

const Fourt = styled.i`
  background-position: left center !important;
`;

const Fifth = styled.i`
  background-position: center center !important;
`;

const Sixth = styled.i`
  background-position: right center !important;
`;

const Seven = styled.i`
  border-bottom-left-radius: ${borderRadius};
  background-position: left bottom !important;
`;

const Eight = styled.i`
  background-position: center bottom !important;
`;

const Ninth = styled.i`
  border-bottom-right-radius: ${borderRadius};
  background-position: right bottom !important;
`;

// .dropped {
//   background:var(--color);
//   background-image:var(--image);
//   background-size:300px 300px;
// }
// .done {
//   opacity:0;
//   pointer-events:none;
// }

// .allDone {
//   animation:allDone 1s linear forwards;
//   border:3px solid lightgray !important;
// }
// .allDone i {
//   outline:0 !important;
// }

// @keyframes allDone {
//   50% { transform:translate(-110%,-50%) scale(1.2); }
// }

const PuzzelSolved = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-110%, -50%);
  width: 300px;
  height: 300px;
  border-radius: ${borderRadius};
  border: 3px dashed lightgray;
  user-select: none;
  overflow: hidden;
  i {
    float: left;
    width: 100px;
    height: 100px;
    outline: 1px dashed lightgray;
  }
`;

const Puzzel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-110%, -50%);
  width: 300px;
  height: 300px;
  border-radius: ${borderRadius};
  border: 3px dashed lightgray;
  user-select: none;
  overflow: hidden;
  width: 325px;
  height: 325px;
  transform: translate(15%, -50%);
  border: 0;
  i {
    float: left;
    width: 100px;
    height: 100px;
    background: ${color};
    background-image: url(${(props) => props.image});
    background-size: 300px 300px;
    cursor: move;
    margin: 4px;
  }
`;

const Game = () => {
  function allowDrop(ev) {
    console.log(ev);
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.className);
  }

  function drop(ev) {
    console.log(ev);
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    if (ev.target.className == data) {
      ev.target.classList.add("dropped");
      document
        .querySelector("." + data + "[draggable='true']")
        .classList.add("done");

      if (document.querySelectorAll(".dropped").length == 9) {
        document.querySelector("#puz").classList.add("allDone");
        document.querySelector("#puz").style.border = "none";
        document.querySelector("#puz").style.animation =
          "allDone 1s linear forwards";

        setTimeout(function () {
          reload();
          randomize();
        }, 1500);
      }
    }
  }

  let image = `https://media.gettyimages.com/vectors/cute-cartoon-dachshunds-in-love-vector-id865392634?s=2048x2048`;
  var img = [
    "https://media.gettyimages.com/photos/cat-headphones-wearing-sunglasses-relaxing-in-the-grass-picture-id512291806?s=2048x2048",
    "https://media.gettyimages.com/vectors/cute-cartoon-dachshunds-in-love-vector-id865392634?s=2048x2048",
    "https://media.gettyimages.com/vectors/heart-shaped-sea-otters-in-love-vector-graphics-vector-id1183276814?s=2048x2048",
    "https://media.gettyimages.com/vectors/funny-no-prob-llama-vector-illustration-vector-id1089951888?s=2048x2048",
    "https://media.gettyimages.com/vectors/cute-sloth-sitting-in-lotus-yoga-pose-cartoon-sloth-bear-vector-vector-id1076571820?s=2048x2048",
    "https://media.gettyimages.com/vectors/hand-drawing-hipster-fantasy-animal-unicorn-illustration-vector-id1065322868?s=2048x2048",
  ];
  var old = 5;
  const PuzzelMuddled = ({ children }) => {
    image = img[old];
    old++;
    if (old > 5) {
      old = 0;
    }
    // so get the muddled one and muddle the chidren , so on load
    let MuddledChildren = (children) => {
      for (var i = children.length; i >= 0; i--) {
        children[(Math.random() * i) | 0];
      }
      return children;
    };

    return <Puzzel>{MuddledChildren(children)}</Puzzel>;
  };

  return (
    <>
      <PuzzelSolved id="puz">
        <First
          image={image}
          className="first"
          ondrop={() => drop(event)}
          ondragover={() => allowDrop(event)}
        ></First>
        <Secon
          image={image}
          className="secon"
          ondrop={() => drop(event)}
          ondragover={() => allowDrop(event)}
        ></Secon>
        <Third
          image={image}
          className="third"
          ondrop={() => drop(event)}
          ondragover={() => allowDrop(event)}
        ></Third>
        <Fourt
          image={image}
          className="fourt"
          ondrop={() => drop(event)}
          ondragover={() => allowDrop(event)}
        ></Fourt>
        <Fifth
          image={image}
          className="fifth"
          ondrop={() => drop(event)}
          ondragover={() => allowDrop(event)}
        ></Fifth>
        <Sixth
          image={image}
          className="sixth"
          ondrop={() => drop(event)}
          ondragover={() => allowDrop(event)}
        ></Sixth>
        <Seven
          image={image}
          className="seven"
          ondrop={() => drop(event)}
          ondragover={() => allowDrop(event)}
        ></Seven>
        <Eight
          image={image}
          className="eight"
          ondrop={() => drop(event)}
          ondragover={() => allowDrop(event)}
        ></Eight>
        <Ninth
          image={image}
          className="ninth"
          ondrop={() => drop(event)}
          ondragover={() => allowDrop(event)}
        ></Ninth>
      </PuzzelSolved>
      <PuzzelMuddled id="puzz">
        <Third
          image={image}
          className="third"
          draggable="true"
          ondragstart="drag(event)"
        ></Third>
        <First
          image={image}
          className="first"
          draggable="true"
          ondragstart="drag(event)"
        ></First>
        <Secon
          image={image}
          className="secon"
          draggable="true"
          ondragstart="drag(event)"
        ></Secon>
        <Fourt
          image={image}
          className="fourt"
          draggable="true"
          ondragstart="drag(event)"
        ></Fourt>
        <Fifth
          image={image}
          className="fifth"
          draggable="true"
          ondragstart="drag(event)"
        ></Fifth>
        <Sixth
          image={image}
          className="sixth"
          draggable="true"
          ondragstart="drag(event)"
        ></Sixth>
        <Seven
          image={image}
          className="seven"
          draggable="true"
          ondragstart="drag(event)"
        ></Seven>
        <Eight
          image={image}
          className="eight"
          draggable="true"
          ondragstart="drag(event)"
        ></Eight>
        <Ninth
          image={image}
          className="ninth"
          draggable="true"
          ondragstart="drag(event)"
        ></Ninth>
      </PuzzelMuddled>
    </>
  );
};

export default Game;
