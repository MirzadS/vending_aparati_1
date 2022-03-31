import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import AboutUs from "./AboutUs";
import Description from "./Description";
import { Zoom } from "react-awesome-reveal";

const Home = ({ burgerStatus, setBurgerStatus }) => {
  return (
    <Main onClick={() => setBurgerStatus(false)}>
      <Container>
        <Zoom duration="1300" triggerOnce>
          <ImgSlider />
        </Zoom>
        <br />
        <br />
        <AboutUs />
        <Description />
      </Container>
    </Main>
  );
};

export default Home;

const Main = styled.main`
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  position: relative;

  &:before {
    background: url("/images/za_cover.jpeg") center center / cover no-repeat
      fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const Container = styled.main`
  max-width: 1300px;
  width: 100%;
  background-color: white;
  position: relative;
`;
