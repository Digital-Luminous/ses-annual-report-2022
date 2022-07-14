import { useState, useEffect } from "react";
import styled from "styled-components";
import Quote from "./Quote";
import allPledges from "../content/pledges.json";
import SectionHeader from "./SectionHeader";

const Background = styled.section`
  background-color: ${(props) => props.theme.colors[props.colour]};
  color: ${(props) => props.theme.colors.white};
`;

const WrapperHero = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 110px 1fr;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 210px 1fr;
  }
`;

const IconWrapper = styled.div`
  padding: 20px 30px;
  order: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    grid-column: 1/2;
  }
`;

const HeroContent = styled.div`
  padding: 20px 30px 90px 30px;
  order: 3;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    grid-column: 1/2;
    padding: 50px 30px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    grid-column: 1/2;
  }

  strong {
    margin-bottom: 10px;
    display: block;
  }
`;

const WrapperDetail = styled.section`
  background-color: ${(props) => props.theme.colors.whiteVeil};
  padding: 50px 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 30px;
    padding: 50px 30px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    grid-gap: 100px;
    padding: 50px 100px 80px 30px;
  }
`;

const Heading = styled.h3`
  color: ${(props) => props.theme.colors.white};
  padding-bottom: 40px;

  span {
    color: ${(props) => props.theme.colors[props.colour]};
  }
`;
const Body = styled.p`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    font-size: 18px;
  }
`;

const Icon = styled.img`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    margin-top: 90px;
    margin-bottom: 40px;
  }
`;

const FeaturedImageWrapper = styled.div`
  margin-inline: 20px;
  margin-bottom: 30px;
  order: 2;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    grid-column: 2/3;
    grid-row: 1/3;
    margin: 0;
    align-self: center;
    height: 100%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    grid-row: 1/3;
  }
`;

const StatBubble = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors[props.colour]};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: absolute;

  right: 20px;
  top: 0;
  transform: translateY(-50%);

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    width: 180px;
    height: 180px;
    left: 20px;
    bottom: 20px;
    right: auto;
    top: auto;
    transform: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    width: 200px;
    height: 200px;
    left: 60px;
    bottom: 60px;
  }
`;

const StatKey = styled.p`
  color: ${(props) => props.theme.colors.blueNavy};
  font-size: 12px;
  padding: 10px 12px;
  text-align: center;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    padding: 10px 20px;
  }
`;

const Stat = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-size: 25px;
  text-align: center;
  margin-bottom: 10px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    font-size: 36px;
    margin-bottom: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    font-size: 46px;
  }
`;

const FeaturedImage = styled.img`
  max-width: 100%;
  object-fit: cover;
  aspect-ratio: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    aspect-ratio: auto;
    height: 100%;
  }
`;

const Highlights = styled.section`
  background-color: ${(props) => props.theme.colors.white};
`;

const HighlightsHeader = styled.div`
  background-color: ${(props) => props.theme.colors[props.colour]};
  padding: 20px 20px 10px;
  font-family: "GothamMedium", Arial, sans-serif;
`;

const HighlightList = styled.ul`
  max-height: 450px;
  overflow: scroll;
  margin-bottom: 50px;
  padding-left: 20px;
  padding-bottom: 40px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    max-height: 600px;
    padding-left: 30px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    max-height: 800px;
  }
`;

const HighlightItem = styled.li`
  padding: 10px 40px 10px 10px;
  color: ${(props) => props.theme.colors.blueNavy};
  list-style: auto;
  list-style-type: "-";
`;

const MetricWrapper = styled.section`
  grid-column: 1/2;
  margin-top: 50px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    width: 70%;
  }
`;

const Metric = styled.div`
  padding: 40px 40px 4px 4px;
  font-family: "GothamMedium", Arial, sans-serif;
  background-color: ${(props) =>
    props.colour ? props.theme.colors[props.colour] : props.theme.colors.white};
  color: ${(props) =>
    props.colour ? props.theme.colors.white : props.theme.colors.blueDark};
  width: ${(props) => (props.short ? `80%` : `100%`)};
  margin-bottom: 10px;
  position: relative;
`;

const MetricFigure = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  font-family: "GothamBook", Arial, sans-serif;
`;

const MetricUnit = styled.p`
  font-family: "GothamBook", Arial, sans-serif;
`;

const Small = styled.p`
  font-family: "GothamBook", Arial, sans-serif;
  font-size: 14px;
  margin-top: 20px;
`;

export default function PledgeOverlay({ activePledge }) {
  const [pledgeData, setPledgeData] = useState(null);

  useEffect(() => {
    setPledgeData(allPledges[activePledge]);
  }, [activePledge]);

  return (
    <>
      {pledgeData && (
        <Background colour={pledgeData.meta.colour.primary}>
          <WrapperHero>
            <IconWrapper>
              <Icon src={pledgeData.icon.src} alt={pledgeData.icon.alt} />
            </IconWrapper>
            <HeroContent>
              <Heading
                dangerouslySetInnerHTML={{ __html: pledgeData.title }}
                colour={pledgeData.meta.colour.secondary}
              />
              <strong>Our pledge in action</strong>
              <Body dangerouslySetInnerHTML={{ __html: pledgeData.body }} />
            </HeroContent>
            <FeaturedImageWrapper>
              <StatBubble colour={pledgeData.stamp.backgroundColour} bottomLeft>
                <StatKey>{pledgeData.stamp.fact}</StatKey>
                <Stat colour={pledgeData.stamp.factColour}>
                  {pledgeData.stamp.figure}
                </Stat>
              </StatBubble>
              <FeaturedImage
                src={pledgeData.image.src}
                alt={pledgeData.image.alt}
              />
            </FeaturedImageWrapper>
          </WrapperHero>

          <WrapperDetail>
            <Highlights>
              <HighlightsHeader colour={pledgeData.meta.colour.secondary}>
                Highlights
              </HighlightsHeader>
              <HighlightList>
                {pledgeData.highlights.map((highlight, i) => {
                  return <HighlightItem key={i}>{highlight}</HighlightItem>;
                })}
              </HighlightList>
            </Highlights>
            <>
              {pledgeData.quotation && (
                <Quote
                  content={pledgeData.quotation}
                  colour={pledgeData.meta.colour.secondary}
                  quoteColour={pledgeData.meta.colour.primary}
                />
              )}
            </>
            {pledgeData.metric && (
              <MetricWrapper>
                <SectionHeader subheading>
                  {pledgeData.metric.heading}
                  <MetricUnit>{pledgeData.metric.unit}</MetricUnit>
                </SectionHeader>
                <Metric short>
                  2021
                  <MetricFigure>
                    {pledgeData.metric.figures["2021"]}
                  </MetricFigure>
                </Metric>
                <Metric colour={pledgeData.meta.colour.secondary}>
                  2022
                  <MetricFigure>
                    {pledgeData.metric.figures["2022"]}
                  </MetricFigure>
                </Metric>
                {pledgeData.metric.caveat && (
                  <Small>{pledgeData.metric.caveat}</Small>
                )}
              </MetricWrapper>
            )}
          </WrapperDetail>
        </Background>
      )}
    </>
  );
}
