import { useEffect, useState } from "react";
import styled from "styled-components";

import SectionHeader from "../SectionHeader";
import Carousel from "../Carousel";

const Background = styled.section`
  background-color: ${(props) => props.theme.colors.blueNavy};
  padding-inline: 20px;
  padding-top: 0;
  padding-bottom: 70px;

  position: relative;
  z-index: 8;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    padding-inline: 80px;
    padding-top: 100px;
    padding-bottom: 150px;
  }
`;

const InnerBox = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 40px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    padding: 50px 30px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    padding: 50px 40px;
  }
`;

const InnerGrid = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
  }
`;

const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: calc(100vw - 130px);
  margin: auto;
`;

const Item = styled.div`
  padding-block: 40px;
  grid-column: 1/2;
  border-bottom: 2px dotted ${(props) => props.theme.colors.teal};
  min-width: 200px;

  :last-child {
    border: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    min-width: 300px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    padding-block: 50px;
    grid-column: auto;

    :last-child {
      grid-column: 1/3;
    }
  }

  h5 {
    color: ${(props) => props.theme.colors.blueNavy};

    font-family: "GothamBook", Arial, sans-serif;
    padding-inline: 0;
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      padding-inline: 40px;
    }
  }
`;

const Figure = styled.h2`
  font-size: 42px;
  color: ${(props) => props.theme.colors[props.colour]};
  padding-bottom: 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    font-size: 70px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    font-size: 75px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    font-size: 100px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
    font-size: 120px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktopLarge}px) {
    font-size: 140px;
  }
`;

const Slide = ({ content }) => {
  return (
    <SlideWrapper>
      {content[0] && (
        <Item>
          <Figure colour={content[0].colour}>{content[0].figure}</Figure>
          <h5>{content[0].label}</h5>
        </Item>
      )}
      {content[1] && (
        <Item>
          <Figure colour={content[1].colour}>{content[1].figure}</Figure>
          <h5>{content[1].label}</h5>
        </Item>
      )}
    </SlideWrapper>
  );
};

export default function Strategy({ content }) {
  const [carouselData, setCarouselData] = useState([]);

  const browserWindow = typeof window !== "undefined" ? window : undefined;
  const isMobile = browserWindow ? browserWindow.innerWidth < 768 : false;

  useEffect(() => {
    let carouselContent = [];
    const createCarouselData = () => {
      content.numbers.forEach((item, index, arr) => {
        const subArray = [];
        if (index % 2 === 0) {
          arr[index + 1]
            ? subArray.push(arr[index], arr[index + 1])
            : subArray.push(arr[index]);
          carouselContent.push(subArray);
        }
      });
      setCarouselData(carouselContent);
    };
    createCarouselData();
  }, [content]);

  return (
    <Background id="strategy">
      <InnerBox>
        <SectionHeader colour="teal" noLine>
          {content.heading}
        </SectionHeader>

        {isMobile && carouselData.length > 0 ? (
          <InnerGrid>
            <Carousel content={carouselData} slideComponent={Slide} />
          </InnerGrid>
        ) : (
          <InnerGrid>
            {content.numbers.map((item, i) => (
              <Item key={`statistic--${i}`}>
                <Figure colour={item.colour}>{item.figure}</Figure>
                <h5>{item.label}</h5>
              </Item>
            ))}
          </InnerGrid>
        )}
      </InnerBox>
    </Background>
  );
}
