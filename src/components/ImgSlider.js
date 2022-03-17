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
      {/* <Wrap>
        <img src="/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="" />
      </Wrap> */}
      {/* <Wrap> */}
      {/* <img src="/images/uzmi-pauzu-r1.jpg" alt="" /> */}
      {/* <img src="/images/za_cover.jpeg" alt="" /> */}
      {/* </Wrap> */}
      <Wrap>
        {/* <img src="/images/na-pauzi-eg.jpg" alt="" /> */}
        <img src="/images/uzmi-pauzu-r1.jpg" alt="" />
      </Wrap>
      <Wrap>
        {/* <img src="/images/na-pauzi-eg.jpg" alt="" /> */}
        <img
          // srcSet="/images/uzmi-pauzu-r1.jpg 1300w,
          //         /images/uzmi-pauzu-r1.jpg 2000w"
          src="/images/spojeno_4.jpg"
          alt=""
        />
        {/* DO 750 TREBA BITI        - aparat_7_660_620.jpg*/}
        {/* OD 750 DO 850 TREBA BITI - aparat_7_850_620.jpg */}
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 140px);

  padding-top: 20px;

  ul li button {
    &:before {
      font-size: 12px;
      // color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  //  .slick-list {
  //   overflow: visible;
  // }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;

  width: 100%;
  height: calc(100vh - 140px);

  img {
    // object-fit: contain;
    // content: url("/images/uzmi-pauzu-rm1.jpg");
    border: 4 px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
      rgba(0 0 0 / 73%) 0px 16px 10px -10px;
  }

  // &:hover {
  //   border-radius: 4px;
  //   border: 1px solid rgba(249, 249, 249, 0.8);
  // }
`;
