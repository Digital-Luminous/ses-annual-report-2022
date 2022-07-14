import { useEffect, useRef } from "react";
import styled from "styled-components";
import Grid from "../layout/Grid";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../theme/animations/animatedComponents.scss";

gsap.registerPlugin(ScrollTrigger);

const Overlay = styled.div`
  background-color: ${(props) => props.theme.colors.blackVeil};
  height: 100%;

  > div {
    height: 100%;
  }
`;

export default function Hero({ content }) {
  const heading = useRef();
  const title = useRef();
  const backgroundRef = useRef();

  useEffect(() => {
    var ww = window.innerWidth;
    let headingAnim = gsap.from(heading.current, {
      opacity: 0,
      duration: 1.5,
      delay: 1,
    });
    let titleAnim = gsap.from(title.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: 2,
    });

    let tl = gsap.timeline({
      ease: "power1.out",
      scrollTrigger: {
        trigger: backgroundRef.current,
        start: ww > "767" ? "top top" : "top 250px",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(heading.current, {
      y: -70,
    }).to(
      backgroundRef.current,
      {
        backgroundPosition: ww > "767" ? "100% 100%" : "50% 50%",
      },
      0
    );

    return () => {
      headingAnim.kill();
      titleAnim.kill();
    };
  }, []);

  return (
    <section
      ref={backgroundRef}
      className="hero__background"
      style={{ backgroundImage: `url(${content.backgroundImage.src}` }}
    >
      <Overlay>
        <Grid
          option={`display: flex; flex-direction: column; justify-content: space-between;`}
        >
          <h2
            ref={heading}
            className="hero__heading"
            dangerouslySetInnerHTML={{ __html: content.heading }}
          ></h2>
          <h1 ref={title} className="hero__report-title">
            {content.title}
          </h1>
        </Grid>
      </Overlay>
    </section>
  );
}
