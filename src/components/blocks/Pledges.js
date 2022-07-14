import { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Grid from "../layout/Grid";
import SectionHeader from "../SectionHeader";
import ReadMore from "../ReadMore";

import "../../theme/animations/animatedComponents.scss";

gsap.registerPlugin(ScrollTrigger);

const Background = styled.section`
  background-color: ${(props) => props.theme.colors.blueNavy};
  color: ${(props) => props.theme.colors.white};

  position: relative;
  z-index: 8;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    padding-bottom: 60px;
  }
`;

const Wrapper = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 20px;
  }
`;

const Card = styled.div`
  margin-bottom: 50px;
  grid-row: span 2;
  cursor: pointer;

  ${(props) =>
    // offset 2nd item
    props.index === 1 &&
    css`
      grid-row: 2/4;
      grid-column: 2/3;
    `}

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    margin-inline: auto;
  }
`;

const Heading = styled.h5`
  color: ${(props) => props.theme.colors.white};
  padding: 0 20px 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    padding: 0 20px 40px;
  }

  span.colour {
    color: ${(props) => props.theme.colors[props.colour]};
  }

  span.no-break {
    white-space: nowrap;
  }
`;

const Icon = styled.img`
  margin-bottom: 20px;
`;
const Thumbnail = styled.img`
  margin-bottom: 30px;
  width: 100%;
`;

export default function Pledges({ content, setActivePledge }) {
  const pledgesRef = useRef([]);

  useEffect(() => {
    let pledgeAnim1 = gsap.from(pledgesRef.current[0], {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: pledgesRef.current[0],
        start: "top 70%",
      },
    });
    let pledgeAnim2 = gsap.from(pledgesRef.current[1], {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: pledgesRef.current[1],
        start: "top 80%",
      },
    });
    let pledgeAnim3 = gsap.from(pledgesRef.current[2], {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: pledgesRef.current[2],
        start: "top 80%",
      },
    });
    let pledgeAnim4 = gsap.from(pledgesRef.current[3], {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: pledgesRef.current[3],
        start: "top 80%",
      },
    });
    let pledgeAnim5 = gsap.from(pledgesRef.current[4], {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: pledgesRef.current[4],
        start: "top 80%",
      },
    });

    return () => {
      pledgeAnim1.kill();
      pledgeAnim2.kill();
      pledgeAnim3.kill();
      pledgeAnim4.kill();
      pledgeAnim5.kill();
    };
  }, []);

  const showPledge = (category) => {
    setActivePledge(category);
  };

  return (
    <Background id="pledges">
      <Grid narrow>
        <SectionHeader>{content.heading}</SectionHeader>
        <Wrapper>
          {content.pledges.map((pledge, i) => (
            <Card
              onClick={() => showPledge(pledge.category)}
              category={pledge.category}
              index={i}
              key={i}
            >
              <div
                className="pledge__inner"
                ref={(element) => {
                  pledgesRef.current[i] = element;
                }}
              >
                <Icon src={pledge.icon.src} alt={pledge.icon.alt} />
                <Thumbnail
                  src={pledge.thumbnail.src}
                  alt={pledge.thumbnail.alt}
                />
                <Heading
                  dangerouslySetInnerHTML={{ __html: pledge.overview }}
                  colour={pledge.colour}
                ></Heading>
                <ReadMore ghost />
              </div>
            </Card>
          ))}
        </Wrapper>
      </Grid>
    </Background>
  );
}
