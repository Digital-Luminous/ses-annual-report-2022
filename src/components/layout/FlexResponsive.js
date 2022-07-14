import styled, { css } from "styled-components";

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.spaceBetween && "space-between"};
  align-items: ${(props) => (props.alignCenter ? "center;" : "flex-start")};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    flex-direction: row;
  }

  ${(props) =>
    props.option &&
    css`
      ${props.option}
    `}
`;

export default function FlexResponsive({
  children,
  spaceBetween,
  alignCenter,
  option,
}) {
  return (
    <Flexbox
      spaceBetween={spaceBetween}
      alignCenter={alignCenter}
      option={option}
    >
      {children}
    </Flexbox>
  );
}
