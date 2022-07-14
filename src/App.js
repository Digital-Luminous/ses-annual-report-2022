import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./theme/global";
import theme from "./theme";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./theme/animations/animatedComponents.scss";

import content from "./content/homepage.json";
import footerContent from "./content/footer.json";

import Header from "./components/blocks/Header";
import Footer from "./components/Footer";

import Hero from "./components/blocks/Hero";
import Overview from "./components/blocks/Overview";
import About from "./components/blocks/About";
import Strategy from "./components/blocks/Strategy";
import Spotlight from "./components/blocks/Spotlight";
import Pledges from "./components/blocks/Pledges";

import Overlay from "./components/Overlay";
import PledgeOverlay from "./components/PledgeOverlay";
import Downloads from "./components/blocks/Downloads";

const Container = styled.section`
  background-color: ${(props) => props.theme.colors.white};
`;

function App() {
  const [activePledge, setActivePledge] = useState(null);

  const handleClose = () => {
    console.log("CLOSE");
    setActivePledge(null);
  };

  const { data } = content;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Container>
        <Header />

        <main>
          {data.map((block, i) => {
            const key = `${block.section}_${i}`;
            const { content } = block;

            switch (block.section) {
              case "hero":
                return <Hero key={key} content={content} />;
              case "overview":
                return <Overview key={key} content={content} />;
              case "about":
                return <About key={key} content={content} />;
              case "strategy":
                return <Strategy key={key} content={content} />;
              case "foreword":
                return (
                  <Spotlight
                    key={key}
                    content={content}
                    section={block.section}
                    quoteColour="teal"
                  />
                );
              case "q-and-a":
                return (
                  <Spotlight
                    dark
                    key={key}
                    content={content}
                    section={block.section}
                    quoteColour="blueNavy"
                  />
                );
              case "pledges":
                return (
                  <Pledges
                    key={key}
                    content={content}
                    setActivePledge={setActivePledge}
                  />
                );
              case "downloads":
                return <Downloads key={key} content={content} />;

              default:
                return null;
            }
          })}
        </main>

        <Footer content={footerContent.content} />
      </Container>

      {activePledge && (
        <Overlay handleClose={handleClose}>
          <PledgeOverlay activePledge={activePledge} />
        </Overlay>
      )}
    </ThemeProvider>
  );
}

export default App;
