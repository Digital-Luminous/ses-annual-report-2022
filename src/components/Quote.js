import { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const QuoteMark = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="25"
    >
      <defs>
        <path id="a" d="M0 0h32v25H0z"></path>
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="currentColor">
          <use xlinkHref="#a"></use>
        </mask>
        <path
          fill="currentColor"
          d="M17.212 25h14.105V10.696h-5.343c0-3.172 1.988-5.036 6.026-5.535L30.881 0c-8.077.373-13.67 3.73-13.67 13.62V25zM0 25h14.105V10.696H8.76c0-3.172 1.99-5.036 6.028-5.535L13.67 0C5.593.373 0 3.73 0 13.62V25z"
          mask="url(#b)"
        ></path>
      </g>
    </svg>
  );
};

const QuoteGrid = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${(props) =>
    props.featured &&
    css`
      display: grid;
      grid-template-rows: auto 40px 1fr;
      grid-template-columns: 40px 1fr 40px;
      margin-bottom: 50px;

      @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
        grid-template-columns: 230px 40px 1fr;
        grid-template-rows: 40px 1fr 40px;
        margin-bottom: 90px;
      }
    `}
`;

const Image = styled.img`
  width: 100%;

  ${(props) =>
    props.featured &&
    css`
      grid-row: 1/3;
      grid-column: 2/3;
      z-index: 10;
      width: 100%;
      align-self: end;
    `}

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    grid-row: 2/3;
    grid-column: 1/3;
    height: 70%;
    object-fit: cover;
    align-self: center;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    height: 100%;
  }
`;

const QuoteWrapper = styled.div`
  background-color: ${(props) =>
    props.colour
      ? props.theme.colors[props.colour]
      : props.theme.colors.blueNavy};
  color: ${(props) => props.theme.colors.white};
  padding: 60px 20px 40px;

  ${(props) =>
    props.featured &&
    css`
      padding: 100px 25px 50px;
      grid-row: 2/4;
      grid-column: 1/4;
    `}

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    padding: ${(props) =>
      props.featured ? `100px 30px 50px;` : `60px 30px 40px`};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    padding: ${(props) =>
      props.featured ? `70px 50px 50px 80px` : `70px 30px 40px`};
    grid-row: 1/4;
    grid-column: 2/4;
  }
`;

const Quotation = styled.p`
  font-size: 22px;
  line-height: 1.3;
  letter-spacing: -1px;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    font-size: 24px;
    padding-left: 0;
  }
`;

const Author = styled.p`
  font-family: "GothamMedium", Arial, sans-serif;
`;

const Position = styled.p``;

const QuoteMarkWrapper = styled.span`
  display: inline-block;
  color: ${(props) =>
    props.colour ? props.theme.colors[props.colour] : props.theme.colors.white};

  svg {
    margin-bottom: 8px;
  }

  ${(props) =>
    props.close &&
    css`
      transform: rotateX(180deg) rotateY(180deg);

      svg {
        margin-top: 40px;
        margin-bottom: 10px;
      }
    `}
`;

export default function Quote({ content, colour, quoteColour, featured }) {
  const quoteRef = useRef();

  useEffect(() => {
    let quoteAnim = gsap.from(quoteRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.25,
      scrollTrigger: {
        trigger: quoteRef.current,
        start: "top 80%",
      },
    });

    return () => {
      quoteAnim.kill();
    };
  }, []);

  const { quote, author, position, image } = content;

  return (
    <div ref={featured && quoteRef}>
      <QuoteGrid featured={featured}>
        <Image src={image.src} alt={image.alt} featured={featured} />
        <QuoteWrapper colour={colour} featured={featured}>
          <QuoteMarkWrapper colour={quoteColour}>
            <QuoteMark />
          </QuoteMarkWrapper>
          <Quotation featured={featured}>{quote}</Quotation>
          <QuoteMarkWrapper colour={quoteColour} close>
            <QuoteMark />
          </QuoteMarkWrapper>
          <Author>{author}</Author>
          <Position>{position}</Position>
        </QuoteWrapper>
      </QuoteGrid>
    </div>
  );
}
