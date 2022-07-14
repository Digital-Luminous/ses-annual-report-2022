import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.blueNavy};
  color: ${(props) => props.theme.colors.white};
  padding: 40px 30px;
  display: flex;
  flex-direction: column-reverse;

  position: relative;
  z-index: 8;

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    display: grid;
    grid-template-columns: 70% 1fr;
    grid-gap: 40px;
    padding: 50px 30px;
  }

  p {
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    @media (min-width: ${(props) =>
        props.theme.breakpoints.tabletLandscape}px) {
      margin-right: 30px;
      margin-bottom: 0;
    }
  }

  a {
    font-family: "GothamMedium", Arial, sans-serif;

    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    display: block;

    :hover {
      color: ${(props) => props.theme.colors.teal};
      transition: all 0.2s ease-out;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
    display: flex;
    flex-direction: row;
  }
`;

const Owner = styled.p`
  img {
    width: 20px;
    margin-right: 8px;
  }
`;
const Design = styled.p``;
const Copyright = styled.p`
  grid-row: 2/3;
  grid-column: 1/3;
  margin-top: 20px;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
    margin-top: 0;
  }
`;

const ScrollToTopBtn = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 30px;
  align-self: flex-end;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    justify-content: flex-end;
    align-self: flex-end;
    margin-bottom: 0;
  }

  :hover {
    color: ${(props) => props.theme.colors.teal};
    transition: all 0.2s ease-out;
  }

  img {
    margin-right: 10px;
  }
`;

export default function Footer({ content }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterWrapper>
      <ContentWrapper>
        <Owner>
          <img
            src="../assets/icons/chevron-circle--white-right.svg"
            alt="arrow icon"
          />
          <a href={content.owner.target} target="_blank" rel="noreferrer">
            {content.owner.label}
          </a>
        </Owner>
        <Design>
          {" "}
          <a href={content.design.target} target="_blank" rel="noreferrer">
            {content.design.label}
          </a>
        </Design>
        <Copyright>&copy; {content.copyright}</Copyright>
      </ContentWrapper>
      <ScrollToTopBtn onClick={scrollToTop}>
        <img src="../assets/icons/chevron--white-up.svg" alt="Back to top" />
        Back to top
      </ScrollToTopBtn>
    </FooterWrapper>
  );
}
