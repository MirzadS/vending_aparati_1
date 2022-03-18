import React from "react";
import styled from "styled-components";
import { Fade, Zoom } from "react-awesome-reveal";

const Description = () => {
  return (
    <DescriptionSection>
      <Container1>
        <TextSection>
          <Zoom duration="1250" triggerOnce>
            <p>
              Svim pravnim I fizičkim licima, koja imaju potrebu da na svojoj
              lokaciji omoguće konzumaciju toplog napitka (KAFA, ČAJ, KAPUČINO
              TOPLA ČOKOLADA MAKIJATO I SL.), ili hladnog napitka (SOK, VODA,
              ENERGY), kao I slatku ili slanu grickalicu, nudimo instalaciju
              samouslužnog aparata.
            </p>
          </Zoom>

          <Zoom duration="1350" triggerOnce>
            <p>
              Instaliranjem ove vrste aparata na Vašoj lokaciji poboljšat ćete
              vaš odnos sa klijentom, uposlenikom, ili posjetiocima, a sve to
              bez dodatnog angažmana, konobara, posuđa, prostorija, bez
              zloupotreba I manipulacija, bez dodatne brige o kvaliteti
              isporučenog napitka. Sve navedeno je naša briga I zadaća. Vaše je
              samo da ubacite sitan novac, odaberete proizvod I ugodno
              predahnete uz kafu sok ili neku grickalicu.
            </p>
          </Zoom>

          <Zoom duration="1450" triggerOnce>
            <p>
              Kada instalirate ovakav aparat na Vašu lokaciju činite uslugu
              sebi, a klijenti koji čekaju ugodno skrate vrijeme čekanja.
              Uposlenici koji rade, ugodno predahnu, gosti koji vas posjete
              dobiju super napitak.
            </p>
          </Zoom>
        </TextSection>

        <PartForImage>
          <Fade direction="right" duration="1400" triggerOnce>
            {/* <ImgSection src="/images/aparat animacija.jpg" /> */}
            <ImgSection src="/images/aparat_7.jpg" />
          </Fade>
        </PartForImage>
      </Container1>
      <hr />
      <Container2>
        <ImgContainer2>
          <Fade direction="left" duration="1400" triggerOnce>
            {/* <ImgSection src="/images/animacija beak 2.jpg" /> */}
            <ImgSection src="/images/aparat_5.jpg" />
          </Fade>
        </ImgContainer2>
        <TextContainer2>
          <TextSection>
            <Zoom duration="1250" triggerOnce>
              <p>
                Ako ste uvidjeli da imate potrebu da na svojoj lokaciji
                instalirate samouslužni aparat, dovoljno je da nas kontaktirate
                na telefon ili mailom. Na terenu ćemo odrediti tačnu lokaciju
                aparata, predstavit ćemo vam vrste aparata koje imamo, kao I
                proizvoda koji se mogu konzumirati. Prezentovat žemo vam cijene
                proizvoda . Na samoj lokaciji dovoljna je utičnica za struju,
                kao I to da lokacija nije izložena padavinama I extremnim
                vremenskim uslovima.
              </p>
            </Zoom>

            <Zoom duration="1350" triggerOnce>
              <Poseban>
                <p>
                  Probni rad aparata je 2 mjeseca i vi nemate nikakvu
                  finansijsku obavezu prema nama, kao ni prema samom aparatu. Mi
                  aparat redovno obilazimo, dopunjavamo i održavamo.
                </p>
              </Poseban>
            </Zoom>
          </TextSection>
        </TextContainer2>
      </Container2>

      <hr />

      <Container1>
        <TextSection>
          <Zoom duration="1250" triggerOnce>
            <h2>MALI ESPRESO APARATI BEZ NAPLATE</h2>
            <p>
              U ponudi imamo i male espreso aparate, koje Vam možemo
              instalirati.
            </p>
          </Zoom>
        </TextSection>
        <PartForImage>
          <Fade direction="right" duration="1400" triggerOnce>
            {/* <ImgSection src="/images/small-machine-2.jpg" /> */}
            <ImgSection src="/images/mali_aparat_1.jpg" />
          </Fade>
        </PartForImage>
      </Container1>
    </DescriptionSection>
  );
};

export default Description;

const DescriptionSection = styled.div`
  // DODAAOOOOOOOO
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 25px 8px 35px;
  background-color: #fcfcfc;

  @media (max-width: 1050px) {
    padding: 25px 0px 35px;
  }
`;

const Container1 = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  min-height: 300px;
  margin-bottom: 3px;

  @media (max-width: 1150px) {
    grid-template-columns: 60% 40%;
  }

  @media (max-width: 1050px) {
    grid-template-columns: 100%;
  } ;
`;

const TextContainer2 = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1050px) {
    order: 1;
  } ;
`;
const ImgContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 1050px) {
    order: 2;
  } ;
`;

const PartForImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Container2 = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  min-height: 300px;

  @media (max-width: 1150px) {
    grid-template-columns: 40% 60%;
  }

  @media (max-width: 1050px) {
    grid-template-columns: 100%;

    // div {
    //   order: 2;
    //   background-color: red;
    // }

    // main {
    //   order: 12;
    //   background-color: blue;
    // }
  } ;
`;

const TextSection = styled.div`
  padding-bottom: 20px;
  text-align: center;

  /* DODAO */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  p {
    font-size: 20px;
    padding: 19px;
    line-height: 1.5;
  }

  @media (max-width: 1150px) {
    gap: 30px;
  }

  @media (max-width: 1050px) {
    gap: 10px;
  }

  @media (max-width: 500px) {
    p {
      padding: 19px 15px;
    }
  }
`;

const ImgSection = styled.img`
  width: 100%;
  // height: 100%;
  border-radius: 6px;

  @media (max-width: 1050px) {
    width: 50%;
  }

  @media (max-width: 750px) {
    width: 70%;
  } ;
`;

const Poseban = styled.div`
  margin: 5px 20px;
  border-radius: 110px 45px;
  color: white;
  background-color: rgba(56, 18, 1, 0.92);
  padding: 15px;

  @media (max-width: 700px) {
    margin: 10px;
  }

  @media (max-width: 500px) {
    margin: 10px 6px;
    padding: 15px 11px;
  }
`;
