import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/coffee-bean.svg" />
        <span>O nama</span>
        <img src="/images/coffee-bean.svg" />
      </Wrap>
      <p>
        Naša djelatnost je distribucija, servis i instalacija samouslužnih kafe
        i snek aparata. To su aparati za posluđivanje toplih, hladnih napita i
        slatkih i slanih grickalica, a koji rade na principu ,, ubaci novac i
        preuzmi super kvalitetan napitak, sve u nekoliko sekundi.
      </p>

      <div class="custom-shape-divider-bottom-1647031027">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </Container>
  );
};

export default AboutUs;

const Container = styled.div`
  text-align: center;
  width: 100%;
  min-height: 310px;
  padding: 35px 30px;
  background-color: rgba(56, 18, 1, 0.93);
  // background-color: red;
  // border-bottom: transparent;
  border: none;
  outline: none;
  position: relative;
  // margin-bottom: 25px;
  color: white;

  p {
    font-size: 23px;
    margin-top: 20px;
    letter-spacing: 1.2px;
    line-height: 1.5;
  }

  @media (max-width: 1000px) {
    padding: 35px 30px 60px;
  }

  @media (max-width: 500px) {
    padding: 35px 10px 60px;

    p {
      font-size: 21px;
    }
  }
`;

const Wrap = styled.div`
  padding: 5px 0;

  span {
    font-size: 41px;
    margin: 0 15px;
    letter-spacing: 1.6px;
    font-weight: bold;
  }

  img {
    width: 45px;
  }

  @media (max-width: 500px) {
    span {
      font-size: 37px;
    }

    img {
      width: 41px;
    }
  }
`;
