import React from "react";
import styled from "styled-components";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const Footer = ({ burgerStatus, setBurgerStatus }) => {
  return (
    <Container onClick={() => setBurgerStatus(false)}>
      <Logo>
        <img src="/images/logo2.PNG" alt="Logo" />
      </Logo>
      <Info>
        <Wrap>
          <MdMail size="2rem" />
          <span>ecogeneraldoo@gmail.com</span>
        </Wrap>
        <Wrap>
          <MdLocationOn size="2rem" />
          <span>
            Azize Šaćirbegović do42, <br /> Robot TC Hrasno 71000 Sarajevo
          </span>
        </Wrap>
      </Info>
      <Telephone>
        <span>Kontakt telefon</span>
        <Wrap>
          <FiPhoneCall size="2rem" />
          <h3>062 002 020</h3>
        </Wrap>
      </Telephone>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  // DODAAOOOOOOOO
  overflow: hidden;
  width: 100%;
  min-height: 200px;
  // background-color: #542001;
  background-color: rgba(56, 18, 1, 0.96);
  padding: 15px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  gap: 25px;

  @media (max-width: 1100px) {
    flex-direction: column;

    gap: 35px;
  } ;
`;

const Logo = styled.div`
  // width: 200px;

  img {
    width: 450px;
  }

  @media (max-width: 1100px) {
    order: 3;

    img {
      width: 500px;
    }

    @media (max-width: 510px) {
      img {
        width: 95%;
      }
  } ;
`;

const Info = styled.div`
  font-size: 23px;
  color: #f0f0f0;
  letter-spacing: 1.3px;

  @media (max-width: 1250px) {
    font-size: 21px;
  }

  @media (max-width: 1100px) {
    order: 1;
  } ;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  gap: 8px;
`;
const Telephone = styled.div`
  font-size: 27px;
  color: #f0f0f0;

  div {
    font-size: 33px;
  }

  @media (max-width: 1250px) {
    font-size: 25px;

    div {
      font-size: 29px;
    }
  }

  @media (max-width: 1100px) {
    order: 2;
  } ;
`;
