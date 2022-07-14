import styled, { css } from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const Content = styled.div`
  grid-column: 2/12;
  padding-top: 55px;

  ${(props) =>
    props.option &&
    css`
      ${props.option}
    `}

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    padding-top: 85px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    grid-column: ${(props) => (props.narrow ? "3 / 11" : "2 / 12")};
    padding-top: 110px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
    padding-top: 150px;
  }
`;

export default function Grid({ children, narrow, padding, option }) {
  return (
    <Container>
      <Content narrow={narrow} padding={padding} option={option}>
        {children}
      </Content>
    </Container>
  );
}
