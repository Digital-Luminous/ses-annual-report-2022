import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100vw;
  height: ${(props) => props.theme.navHeight.mobile};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    height: ${(props) => props.theme.navHeight.tablet};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    flex-direction: row;
    align-items: center;
    height: ${(props) => props.theme.navHeight.desktop};
    padding-left: 30px;
  }
`;

const BrandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 20px 20px 20px;
  background-color: ${(props) => props.theme.colors.white};
  height: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    align-items: center;
    flex-direction: row;
    padding: 0;
  }

  h6 {
    font-size: 20px;
    font-family: "GothamBold", Arial, sans-serif;
    color: ${(props) => props.theme.colors.blueNavy};
    padding: 10px 30px 10px 0;
  }
`;

const MobileNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Logo = styled.img`
  width: 85px;
  margin-right: 50px;
  margin-bottom: 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    margin-bottom: 0;
  }
`;

const Hamburger = styled.img`
  width: 40px;

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    display: none;
  }
`;

const NavigationWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  z-index: -1;

  position: absolute;
  left: 0;
  right: 0;
  top: ${(props) => (props.showOnMobile ? props.theme.navHeight.mobile : 0)};

  background-color: ${(props) => props.theme.colors.white};
  transition: top 0.2s ease-out;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    flex-direction: row;
    top: ${(props) => (props.showOnMobile ? props.theme.navHeight.tablet : 0)};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    position: relative;
    top: auto;
    height: 100%;
    z-index: 1;
  }
`;

const NavigationItem = styled.li`
  border: 1px solid ${(props) => props.theme.colors.blueNavy};
  border-left: 0;
  border-right: 0;
  display: flex;
  transition: all 0.2s ease-out;
  margin-top: -1px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    width: 50%;
    border-right: 1px solid ${(props) => props.theme.colors.blueNavy};
    border-left: 1px solid ${(props) => props.theme.colors.blueNavy};
    margin: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tabletLandscape}px) {
    width: auto;
    border: 2px solid ${(props) => props.theme.colors.blueNavy};
    border-top: 0;
    margin-left: -2px;
  }

  :hover {
    border-color: ${(props) => props.theme.colors.teal};
    z-index: 1;
  }

  a {
    padding: 15px 25px;
    font-family: "GothamMedium", Arial, sans-serif;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.blueNavy};
    width: 100%;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.2s ease-out;

    :hover {
      color: ${(props) => props.theme.colors.teal};
    }
    @media (min-width: ${(props) =>
        props.theme.breakpoints.tabletLandscape}px) {
      padding: 20px 25px;
    }
  }

  svg {
    margin-left: 30px;

    @media (min-width: ${(props) =>
        props.theme.breakpoints.tabletLandscape}px) {
      margin-left: 50px;
    }
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOnMobile, setShowOnMobile] = useState(false);

  const browserWindow = typeof window !== "undefined" ? window : undefined;
  const isMobile = browserWindow ? browserWindow.innerWidth < 1024 : false;

  useEffect(() => {
    // unless it's mobile and open, don't show
    !(isMobile && !isOpen) ? setShowOnMobile(true) : setShowOnMobile(false);
  }, [isOpen, isMobile]);

  return (
    <Wrapper>
      <BrandingWrapper>
        <MobileNavWrapper>
          <Logo src="../assets/SES-Water_logo.svg" alt="SES Water logo" />
          <Hamburger
            onClick={() => setIsOpen(!isOpen)}
            src="../assets/icons/hamburger.svg"
            alt="menu icon"
          />
        </MobileNavWrapper>
        <h6>Annual Report and Financial Statements 2022</h6>
      </BrandingWrapper>

      <NavigationWrapper showOnMobile={showOnMobile}>
        <NavigationItem onClick={() => setIsOpen(false)}>
          <a href="#overview">
            Contents
            <svg width="36" height="35" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(.424)" fill="none" fill-rule="evenodd">
                <path d="M8.988 15h16.976H8.988Z" fill="#FFF" />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  d="M10.985 12.178h15.978M10.985 18h15.978"
                />
                <path d="M8.988 24h16.976H8.988Z" fill="#FFF" />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  d="M10.985 24.177h15.978"
                />
                <path
                  d="M8.988 14.5A1.499 1.499 0 1 1 7.489 13c.828 0 1.499.672 1.499 1.5"
                  fill="#FFF"
                />
                <path
                  d="M8.988 12.5A1.499 1.499 0 1 1 7.489 11c.828 0 1.499.672 1.499 1.5Z"
                  stroke="currentColor"
                />
                <path
                  d="M8.988 18.5a1.499 1.499 0 1 1-2.998.002 1.499 1.499 0 0 1 2.998-.002"
                  fill="#FFF"
                />
                <path
                  d="M8.988 18a1.499 1.499 0 1 1-2.998.002A1.499 1.499 0 0 1 8.988 18Z"
                  stroke="currentColor"
                />
                <path
                  d="M8.988 23.5a1.499 1.499 0 1 1-2.999.002 1.499 1.499 0 0 1 2.999-.002"
                  fill="#FFF"
                />
                <path
                  d="M8.988 23.5a1.499 1.499 0 1 1-2.999.002 1.499 1.499 0 0 1 2.999-.002Z"
                  stroke="currentColor"
                />
                <ellipse
                  stroke="currentColor"
                  cx="17.476"
                  cy="17.5"
                  rx="16.976"
                  ry="17"
                />
              </g>
            </svg>
          </a>
        </NavigationItem>
        <NavigationItem onClick={() => setIsOpen(false)}>
          <a href="#downloads">
            Downloads
            <svg width="36" height="35" xmlns="http://www.w3.org/2000/svg">
              <g
                transform="translate(.085)"
                stroke="currentColor"
                fill="none"
                fill-rule="evenodd"
              >
                <g stroke-linecap="round">
                  <path d="m13.232 15.169 4.669 5.252 4.668-5.252H20.28V7H15.52v8.169z" />
                  <path
                    stroke-linejoin="round"
                    d="M25.964 20.421V24H8.988v-3.579"
                  />
                </g>
                <ellipse cx="17.476" cy="17.5" rx="16.976" ry="17" />
              </g>
            </svg>
          </a>
        </NavigationItem>
      </NavigationWrapper>
    </Wrapper>
  );
}
