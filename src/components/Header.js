import React from "react";
import styled from "styled-components";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function Header({ burgerStatus, setBurgerStatus }) {
  return (
    <>
      <HeaderInfo onClick={() => setBurgerStatus(false)}>
        <IconPhone>
          <FiPhoneCall />
          <span>062 002 020</span>
        </IconPhone>
        <a
          href="https://hr-hr.facebook.com/ecogeneralvending/"
          target={"_blank"}
        >
          <FaFacebookSquare size="1.7rem" />
        </a>
      </HeaderInfo>

      <Nav>
        <Logo src="/images/logo2.PNG" />
        <NavMenu onClick={() => setBurgerStatus(false)}>
          <Link to="/">
            <span>POČETNA</span>
          </Link>

          {
            <Link to="/">
              <span>PROBNI RAD</span>
            </Link>
          }

          <Link to="/kontakt">
            <span>KONTAKT</span>
          </Link>
        </NavMenu>
        <Fade direction="right" duration="1300">
          <Wrap>
            <p>Unaprijedite vaš posao i radni ambijent</p>
            <img src="/images/cup-8.png" alt="" />
          </Wrap>
        </Fade>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </Nav>
      <BurgerNav show={burgerStatus}>
        <BurgerText>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>

          <li>
            <Link onClick={() => setBurgerStatus(false)} to="/">
              POČETNA
            </Link>
          </li>
          <li>
            <Link onClick={() => setBurgerStatus(false)} to="/">
              PROBNI RAD
            </Link>
          </li>
          <li>
            <Link onClick={() => setBurgerStatus(false)} to="/kontakt">
              KONTAKT
            </Link>
          </li>
        </BurgerText>

        <BurgerQuote>
          <p>Unaprijedite vaš posao i radni ambijent</p>
          <img src="/images/cup-8.png" alt="" />
        </BurgerQuote>
      </BurgerNav>
    </>
  );
}

export default Header;

const BurgerMenu = styled.div`
  display: none;

  @media (max-width: 1400px) {
    display: block;
  } ;
`;

const CustomMenu = styled(GiHamburgerMenu)`
  cursor: pointer;
  font-size: 1.8rem;
  display: none;

  @media (max-width: 1200px) {
    display: block;
  } ;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  justify-content: space-between;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
      text-decoration: none;
      color: black;
    }
  }
`;

const BurgerText = styled.div`
  font-size: 17px;
  // font-style: normal;
`;

const BurgerQuote = styled.div`
  // Ne radi nista niti font-size
  // font-family: "Lora", serif;
  display: flex;
  width: 100%;
  // height: 100px;
  font-weight: bold;
  p {
    font-size: 20px;
    // font-weight: 900;
  }

  img {
    height: 60px;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(AiOutlineClose)`
  font-size: 1.5rem;
  cursor: pointer;
`;

const HeaderInfo = styled.div`
  // DODAAOOOOOOOO
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  width: 100%;
  height: 40px;
  background-color: white;
  border-bottom: 1px solid #ededed;
  background-color: #f2f2f2;

  @media (max-width: 1200px) {
    padding: 0 30px 0 15%;
  }
`;

const IconPhone = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 18px;
  font-weight: bold;
  opacity: 0.7;
`;
/* const FacebookIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  opacity: 1;
`; */

const Nav = styled.nav`
  // DODAAOOOOOOOO
  overflow: hidden;

  height: 70px;
  background: white;
  display: flex;
  align-items: center;
  padding: 0 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  z-index: 222;
  border-bottom: 4px solid brown;

  @media (max-width: 1000px) {
    justify-content: space-between;
  }

  @media (max-width: 750px) {
    padding: 0 30px 0 4px;
  } ;
`;

const Logo = styled.img`
  width: 390px;

  // @media (max-width: 1000px) {
  //   width: 380px;
  // }

  @media (max-width: 800px) {
    width: 55%;
  }

  @media (max-width: 550px) {
    width: 70%;
  }

  @media (max-width: 450px) {
    width: 80%;
  }
`;

const Logo2 = styled.img`
  height: 100%;
`;

const Wrap = styled.div`
  width: 310px;
  text-align: center;
  display: flex;
  align-items: center;

  p {
    font-size: 20px;
  }
  img {
    height: 60px;
  }

  @media (max-width: 1200px) {
    display: none;
  } ;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 15px;
    color: black;
    text-decoration: none;
    cursor: pointer;

    span {
      font-size: 16px;
      // font-style: normal;
      font-weight: 600;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: black;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  @media (max-width: 1000px) {
    display: none;
  } ;
`;
