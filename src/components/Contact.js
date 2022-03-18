import React from "react";
import styled from "styled-components";
import { IoMdContacts, IoMdTime } from "react-icons/io";
import { MdLocationOn, MdMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Contact = ({ burgerStatus, setBurgerStatus }) => {
  return (
    <Main onClick={() => setBurgerStatus(false)}>
      <h1>Kontakt informacije</h1>
      <Container>
        <ContactWrap>
          <h2>
            <IoMdContacts />
            Kontakt
          </h2>

          <Wrap>
            <MdMail size="2rem" />
            <span>ecogeneraldoo@gmail.com</span>
          </Wrap>
          <Wrap>
            <FiPhoneCall size="2rem" />
            <span>062 002 020</span>
          </Wrap>
        </ContactWrap>
        <LocationWrap>
          <h2>
            <MdLocationOn />
            Lokacija
          </h2>

          <Wrap>
            <IoMdTime size="2rem" />
            <span>Pon - Pet: 07h - 15h</span>
          </Wrap>
          <Wrap>
            <MdLocationOn size="2rem" />
            <span>
              Azize Šaćirbegović do42, <br /> Robot TC Hrasno 71000 Sarajevo
            </span>
          </Wrap>
        </LocationWrap>
      </Container>

      <Map>
        <ImgContact src="/images/fotka111.jpg" />
      </Map>
    </Main>
  );
};

export default Contact;

const Main = styled.main`
  width: 100%;
  min-height: 450px;
  text-align: center;
  // padding: 35px;

  h1 {
    font-size: 35px;
  }

  @media (max-width: 1100px) {
    padding: 50px 15px;
  } ;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 80px;

    div {
      justify-content: center;
    }
  } ;
`;

const ContactWrap = styled.div`
  font-size: 23px;
  font-weight: bold;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    text-align: left;
  }

  h2 {
    font-size: 31px;
  }

  @media (max-width: 1100px) {
    font-size: 21px;

    h2 {
      font-size: 28px;
    }
  }
`;
const LocationWrap = styled.div`
  font-size: 23px;
  font-weight: bold;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    text-align: left;
  }

  h2 {
    font-size: 31px;
  }

  @media (max-width: 1100px) {
    font-size: 21px;

    h2 {
      font-size: 28px;
    }
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Map = styled.div`
  min-height: 100px;
  width: 100%;
  margin: 60px 0 20px;

  @media (max-width: 1100px) {
    margin: 40px 0 3px;
  }
`;

const ImgContact = styled.img`
  width: 90%;
  // height: 100%;
  border-radius: 15px;
`;
