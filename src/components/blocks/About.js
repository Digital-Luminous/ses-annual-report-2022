import styled from "styled-components";
import Grid from "../layout/Grid";

import SectionHeader from "../SectionHeader";

const Background = styled.section`
  background-color: ${(props) => props.theme.colors.blueNavy};
  color: ${(props) => props.theme.colors.white};
  padding-bottom: 50px;

  position: relative;
  z-index: 8;
`;

const Item = styled.div`
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    width: 80%;
    margin-inline: auto;
  }
`;

const Heading = styled.h2`
  color: ${(props) => props.theme.colors.teal};
  padding-bottom: 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    padding-bottom: 40px;
  }
`;

const Body = styled.h5`
  padding-bottom: 50px;
`;

const VerticalLine = styled.div`
  height: 60px;
  width: 0;
  border-right: 2px dotted white;
  margin-inline: auto;
  margin-bottom: 20px;
`;

export default function About({ content }) {
  return (
    <Background id="about">
      <Grid narrow>
        <SectionHeader noLine>{content.heading}</SectionHeader>

        {content.intro.map((item, i) => (
          <Item key={i}>
            <VerticalLine />
            <Heading>{item.heading}</Heading>
            <Body>{item.body}</Body>
          </Item>
        ))}
        <VerticalLine />
      </Grid>
    </Background>
  );
}
