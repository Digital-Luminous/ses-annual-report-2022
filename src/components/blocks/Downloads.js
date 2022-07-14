import styled from "styled-components";

import SectionHeader from "../SectionHeader";
import Grid from "../layout/Grid";
import Carousel from "../Carousel";

const DownloadsWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.white};
  padding-bottom: 80px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    padding-bottom: 120px;
  }

  position: relative;
  z-index: 8;
`;

const Slide = ({ content }) => {
  return (
    <a
      href={content.location}
      download={content.title}
      target="_blank"
      rel="noreferrer"
    >
      <img src={content.thumbnail} alt="Thumbnail of the document" />
      <p>
        {content.title}
        <span>{content.format}</span>
      </p>
    </a>
  );
};

export default function Downloads({ content }) {
  return (
    <DownloadsWrapper id="downloads">
      <Grid>
        <SectionHeader colour="blueNavy" noLine>
          {content.heading}
        </SectionHeader>
        <Carousel content={content.documents} slideComponent={Slide} />
      </Grid>
    </DownloadsWrapper>
  );
}
