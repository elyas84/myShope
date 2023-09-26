import React from 'react'
import styled from 'styled-components'
const Container = styled.button`
background-color: transparent;
background-color: #f7f7f7;
padding: 20px;
letter-spacing: 1px;
text-transform: uppercase;
cursor: pointer;
border: none;
transition: all .3s ease;
&:hover{
    box-shadow: 2px 2px 20px 2px lightgray;
}

`

export default function HomePageFilterLabel({item}) {
  return (
    <Container>{item.title}</Container>
  )
}
