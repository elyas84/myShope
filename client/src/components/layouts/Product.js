import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {BiDollar} from 'react-icons/bi'
const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
flex-direction: column;
  background-color: #f7f7f7;
  justify-content: center;
  align-items: center;
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
const CardTitleContianer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const CardTitle = styled.h4`
margin-bottom: 10px;
text-transform: uppercase;
letter-spacing: 1px;
color: #000;
`;
const CardSubTitle = styled.h4`
color: #000;
text-transform: uppercase;
letter-spacing: 1px;
display: flex;
align-items: center;
svg {
    margin-right: 5px;
}
`;

export default function Product({item, i}) {
  return (
    <NavLink to={"/"+i} style={{ color: "gray" }}>
      <CardContainer>
        <CardImageContainer>
          <CardImg src={item.image} alt="image" />
        </CardImageContainer>
        <CardTitleContianer>
          <CardTitle>{item.title}</CardTitle>
          <CardSubTitle><BiDollar />{item.price}</CardSubTitle>
        </CardTitleContianer>
      </CardContainer>
    </NavLink>
  )
}
