import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f7f7f7;
  padding: 25px;
  transition: all .3s ease;
  &:hover{
    box-shadow: 2px 2px 30px 2px lightgray;
  }
`;
const CardImageContainer = styled.div`
  width: 250px;
  height: 200px;
`;
const CardImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
const CardTitleContianer = styled.div``;
const CardTitle = styled.h2`
margin-bottom: 10px;
text-transform: uppercase;
letter-spacing: 1px;
`;
const CardSubTitle = styled.h4`
text-transform: uppercase;
letter-spacing: 1px;
`;

export default function ShowCaseHomePageCard({ item }) {
  return (
    <NavLink to={item.path} style={{ color: "gray" }}>
      <CardContainer>
        <CardImageContainer>
          <CardImg src={item.image} alt="image" />
        </CardImageContainer>
        <CardTitleContianer>
          <CardTitle>{item.title}</CardTitle>
          <CardSubTitle>{item.subtitle}</CardSubTitle>
        </CardTitleContianer>
      </CardContainer>
    </NavLink>
  );
}
