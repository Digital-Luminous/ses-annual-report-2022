import styled, { css } from "styled-components";

const Wrapper = styled.h6`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.small && "16px"};

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    font-size: ${(props) => props.small && "18px"};
  }
  svg {
    margin-right: 8px;
  }

  ${(props) =>
    props.ghost &&
    css`
      padding: 12px 18px;
      :hover {
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.blueNavy};
        transition: all 0.2s ease-out;
        padding: 12px 18px;
      }
    `}
`;

export default function ReadMore({ small, ghost }) {
  return (
    <Wrapper small={small} ghost={ghost}>
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <g
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        >
          <circle cx="11" cy="11" r="10" />
          <g stroke-linecap="round">
            <path d="M11 6.2v9.6M15.333 11H6" />
          </g>
        </g>
      </svg>
      Read more
    </Wrapper>
  );
}
