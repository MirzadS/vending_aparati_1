import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider_img_1.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider_img_2.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider_img_3.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  width: 100%;
  height: calc(100vh - 140px);
  padding-top: 20px;

  ul li button {
    &:before {
      font-size: 12px;
    }
  }

  li.slick-active button:before {
    color: white;
  }

  button {
    z-index: 1;
  }

  @media (max-width: 1350px) {
    overflow: hidden;
  }
  @media (max-width: 550px) {
    padding-top: 3px;
    height: calc(92vh - 140px);
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  width: 100%;
  height: calc(100vh - 140px);

  img {
    object-fit: contain;
    border: 4 px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
      rgba(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`;
