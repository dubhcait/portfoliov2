import styled from "styled-components";

const marginLeft = "30px";

const Title = styled.h1`
  font-family: "Cutive Mono", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 26px;
  margin-bottom: 0;
  margin-left: ${marginLeft};
`;

const SubTitle = styled.h2`
  font-family: "Cutive Mono", monospace;
  font-style: normal;
  font-weight: normal;
  margin-top: 0;
  font-size: 22px;
  line-height: 24px;
  margin-left: ${marginLeft};
`;

const Text = styled.p`
  font-family: "Cutive Mono", monospace;
  max-width: 268px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 13px;
  margin-left: ${marginLeft};
`;

const MinorTitle = styled.p`
  font-family: "Cutive Mono", monospace;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 13px;
  margin-bottom: 0;
  margin-left: ${marginLeft};
`;

export { Title, SubTitle, Text, MinorTitle };
