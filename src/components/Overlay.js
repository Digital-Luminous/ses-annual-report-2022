import styled from "styled-components";

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.colors.overlay};
  color: ${(props) => props.theme.colors.white};
  overflow: scroll;
  z-index: 20;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Close = styled.img`
  position: fixed;
  right: 20px;
  top: 20px;
  cursor: pointer;
  z-index: 1;
`;

export default function Overlay({ children, handleClose }) {
  return (
    <Wrapper>
      <Close
        onClick={handleClose}
        src="../assets/icons/close--white-on-blue.svg"
      ></Close>
      {children}
    </Wrapper>
  );
}
