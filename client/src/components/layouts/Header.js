import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { FaShopify } from "react-icons/fa";
import SearchInput from "./SearchInput";
const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;
const TopNav = styled.div`
  width: 100%;
  height: 45px;
  background-color: #1f1f1f;
`;
const ULContainer = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  height: 100%;
  position: relative;
`;
const UL = styled.ul`
  display: flex;
  align-items: center;
`;
const LI = styled.li`
  margin-right: 10px;
  a {
    text-transform: capitalize;
    color: #e6e6e6;
    font-size: 13px;
    &:hover {
      color: #fff;
    }
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  margin-left: 10px;
  outline: none;
  border: none;
  svg {
    font-size: 25px;
    color: #e6e6e6;
    &:hover {
      color: lightgray;
    }
  }
`;

const Logo = styled.div`
  cursor: pointer;
  margin: 4rem 0;
  svg {
    color: #1f1f1f;
    font-size: 6rem;
  }
  :visited {
    background-color: #fff;
  }
`;

const MainUl = styled.ul`
  width: 1200px;
  padding: 20px 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid lightgray;
`;
const MainLi = styled.li`
  margin-right: 20px;
  display: flex;
  align-items: center;

  a {
    color: #1f1f1f;
    text-transform: uppercase;
    letter-spacing: 1px;
    &:hover {
      color: gray;
    }
  }

  :visited {
    background-color: #fff;
  }
  

`;

export default function Header() {
  const [clicked, setClicked] = useState(false);
  const toggleHandler = () => {
    setClicked(!clicked);
  };

  return (
    <Container>
      <TopNav>
        <ULContainer>
          <UL>
            <LI>
              <NavLink to="/login">login</NavLink>
            </LI>
            <LI>
              <NavLink to="/sign">sign up</NavLink>
            </LI>
          </UL>
          <UL>
            <NavButton
              onClick={() => {
                toggleHandler();
              }}
            >
              <AiOutlineSearch />
            </NavButton>
            <NavButton>
              <AiOutlineShoppingCart />
            </NavButton>
          </UL>
          <SearchInput clicked={clicked} toggleHandler={toggleHandler} />
        </ULContainer>
      </TopNav>

      <Logo>
        <NavLink to="/">
          <FaShopify />
        </NavLink>
      </Logo>
      <MainUl>
        <MainLi>
          <NavLink to="/accessories">Accessories</NavLink>
        </MainLi>
        <MainLi>
          <NavLink to="/electronic">Electronic</NavLink>
        </MainLi>
        <MainLi>
          <NavLink to="/clothing">Clothing</NavLink>
        </MainLi>
        <MainLi>
          <NavLink to="/furniture">Furniture</NavLink>
        </MainLi>
        <MainLi>
          <NavLink to="/jewelry">Jewelry</NavLink>
        </MainLi>
      </MainUl>
    </Container>
  );
}
