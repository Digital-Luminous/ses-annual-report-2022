import styled, { css } from "styled-components";

const Heading = styled.h3`
  padding-bottom: 1.875rem;
  text-align: center;
  color: ${(props) =>
    props.colour ? props.theme.colors[props.colour] : props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    font-size: 2.5rem;
    padding-bottom: ${(props) => (props.noLine ? `4rem` : `2rem`)};
  }

  ${(props) =>
    !props.noLine &&
    css`
      border-bottom: 2px dotted white;
      border-color: ${(props) =>
        props.colour
          ? props.theme.colors[props.colour]
          : props.theme.colors.white};
      margin-bottom: 1.875rem;

      @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
        margin-bottom: 3.75rem;
      }
    `}

  ${(props) =>
    props.subheading &&
    css`
      font-size: 1.125rem;
      text-align: left;
      padding-bottom: 1rem;
      margin-bottom: 1rem;

      @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
        font-size: 1.125rem;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
      }
    `}
`;

export default function SectionHeader({
  children,
  colour,
  subheading,
  noLine,
}) {
  return (
    <Heading colour={colour} subheading={subheading} noLine={noLine}>
      {children}
    </Heading>
  );
}
