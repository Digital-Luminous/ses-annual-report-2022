import styled from "styled-components";
import Grid from "../layout/Grid";
import Quote from "../Quote";

import SectionHeader from "../SectionHeader";

const Background = styled.section`
  background-color: ${(props) =>
    props.dark ? props.theme.colors.blueMist : props.theme.colors.white};
  color: ${(props) => props.theme.colors.blueNavy};
  padding-bottom: 50px;

  position: relative;
  z-index: 8;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    padding-bottom: 100px;
  }
`;

const Subheading = styled.h6`
  margin-bottom: 3.75rem;
  font-family: "GothamMedium", Arial, sans-serif;
  text-align: center;

  line-height: 1.3;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    width: 90%;
    margin-inline: auto;
  }
`;

const Body = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    width: 80%;
    margin-inline: auto;
  }

  p {
    margin-bottom: 10px;
  }
`;

const DownloadBtn = styled.a`
  font-family: "GothamMedium", Arial, sans-serif;
  border: 2px solid ${(props) => props.theme.colors.blueNavy};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.blueNavy};
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  margin-inline: auto;
  margin-top: 60px;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.blueNavy};
    color: ${(props) => props.theme.colors.white};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    max-width: 300px;
  }

  svg {
    width: 40px;
    margin-left: 20px;
  }
`;

export default function Spotlight({ section, content, dark, quoteColour }) {
  return (
    <Background id={section} dark={dark}>
      <Grid narrow>
        <SectionHeader colour="blueNavy">{content.heading}</SectionHeader>
        <Subheading>{content.subheading}</Subheading>

        <Quote
          content={content.quotation}
          colour={quoteColour}
          quoteColour={content.quotation.detailColour}
          featured
        />

        <Body>
          {content.detail.title && (
            <p>
              <strong>{content.detail.title}</strong>
            </p>
          )}
          <div dangerouslySetInnerHTML={{ __html: content.detail.body }}></div>
        </Body>
        <DownloadBtn
          href={content.cta.documentLocation}
          target="_blank"
          download={content.cta.documentName}
        >
          {content.cta.label}
          <svg width="19" height="19" xmlns="http://www.w3.org/2000/svg">
            <g
              stroke="currentColor"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
            >
              <path d="m5.25 9.169 4.675 5.252L14.6 9.169h-2.291V1H7.541v8.169z" />
              <path stroke-linejoin="round" d="M18 14.421V18H1v-3.579" />
            </g>
          </svg>
        </DownloadBtn>
      </Grid>
    </Background>
  );
}
