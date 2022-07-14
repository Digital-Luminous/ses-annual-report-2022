import Slider from "react-slick";
import styled from "styled-components";

const CarouselWrapper = styled.section`
  .slick-prev,
  .slick-next {
    width: 30px;
    height: 50px;
    top: 50%;
  }
`;

const Slide = styled.div`
  a {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    min-height: 300px;
    margin: auto;
    justify-content: space-between;
  }
  p {
    color: ${(props) => props.theme.colors.blueNavy};
    font-family: "GothamMedium", Arial, sans-serif;
    letter-spacing: -1px;
    text-align: center;
  }
  span {
    margin-left: 5px;
    font-family: "GothamBook", Arial, sans-serif;
  }
`;

export default function Carousel({ content, slideComponent }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <img
        src="../assets/icons/chevron--blue-right.svg"
        alt="right arrow icon"
      />
    ),
    prevArrow: (
      <img src="../assets/icons/chevron--blue-left.svg" alt="left arrow icon" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  const Component = slideComponent;

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {content.map((slideData, i) => (
          <Slide key={`slide--${i}`}>
            <Component content={slideData} />
          </Slide>
        ))}
      </Slider>
    </CarouselWrapper>
  );
}
