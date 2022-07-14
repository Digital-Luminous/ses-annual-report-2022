import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled, { css } from "styled-components";

import Grid from "../layout/Grid";
import ReadMore from "../ReadMore";
import SectionHeader from "../SectionHeader";

gsap.registerPlugin(ScrollTrigger);

// Necessary to push down content below the hero, for animation purposes
const EmtpyBlock = styled.section`
  height: calc(70vh + 300px);
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    height: calc(80vh + 300px);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    height: 90vh;
  }
`;

const Background = styled.section`
  background-color: ${(props) => props.theme.colors.blueNavy};
  color: ${(props) => props.theme.colors.white};

  position: relative;
  z-index: 8;
`;

const TileContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Tile = styled.section`
  background-color: ${(props) => props.theme.colors.teal};
  height: 100%;
  display: flex;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    flex-direction: column;
  }

  div {
    width: 100%;
  }

  :hover {
    div {
      background-color: ${(props) => props.theme.colors.whiteVeil};
      transition: all 0.2s ease-out;
    }
  }
`;

const Image = styled.img`
  width: 35%;
  aspect-ratio: 1;
  object-fit: cover;
  ${(props) =>
    props.index === 1 &&
    css`
      object-position: 60%;
    `}
  ${(props) =>
    props.index === 2 &&
    css`
      object-position: 20%;
    `}
  ${(props) =>
    props.index === 3 &&
    css`
      object-position: 70%;
    `}

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    width: 100%;
    aspect-ratio: auto;
    object-position: unset;
  }
`;

const TileLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 20px;
  min-height: 80px;
  height: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    padding: 20px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    flex-direction: row;
    align-items: flex-end;
    padding: 15px 20px;
  }
`;

const Heading = styled.h5`
  color: ${(props) => props.theme.colors.white};
  line-height: 1;
  margin-bottom: 10px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    margin-bottom: 0;
    width: 55%;
    align-self: center;
    align-self: flex-start;
  }
`;

export default function Overview({ content }) {
  const tilesRef = useRef([]);

  useEffect(() => {
    let tileAnim1 = gsap.from(tilesRef.current[0], {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: tilesRef.current[0],
        start: "top 80%",
      },
    });
    let tileAnim2 = gsap.from(tilesRef.current[1], {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: tilesRef.current[1],
        start: "top 80%",
      },
    });
    let tileAnim3 = gsap.from(tilesRef.current[2], {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 1.5,
      scrollTrigger: {
        trigger: tilesRef.current[1],
        start: "top 80%",
      },
    });
    let tileAnim4 = gsap.from(tilesRef.current[3], {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 2,
      scrollTrigger: {
        trigger: tilesRef.current[1],
        start: "top 80%",
      },
    });

    return () => {
      tileAnim1.kill();
      tileAnim2.kill();
      tileAnim3.kill();
      tileAnim4.kill();
    };
  }, []);

  return (
    <>
      <EmtpyBlock />
      <Background id="overview">
        <Grid narrow>
          <SectionHeader>{content.heading}</SectionHeader>

          <TileContainer>
            {content.items.map((item, i) => (
              <a
                ref={(element) => {
                  tilesRef.current[i] = element;
                }}
                href={item.target}
                key={`${item.target}--${i}`}
              >
                <Tile>
                  <Image src={item.image.src} alt={item.image.alt} index={i} />
                  <TileLabel>
                    <Heading>{item.heading}</Heading>
                    <ReadMore small />
                  </TileLabel>
                </Tile>
              </a>
            ))}
          </TileContainer>
        </Grid>
      </Background>
    </>
  );
}
