import React from 'react'
import { styled } from 'styled-components'
import logoBurger from '/images/logo-orange.png'

export default function Logo() {
  return (
    <>
    <LogoStyled>
    <h1>Crazee</h1>
    
      <LogoImage src={logoBurger} alt="logo burger" />
      
    <h1>Burger</h1>
  </LogoStyled>
    </>
  )

}

const LogoStyled = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    margin-top: 6.43rem;


h1 {

    color: #FFA01B;
    text-align: center;
    font-family: Amatic SC;
    font-size: 6.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 7.1875rem; /* 104.545% */
    letter-spacing: 0.09375rem;
    text-transform: uppercase;
}
img {
    width: 12.5rem;
    height: 9.375rem;
    flex-shrink: 0;

}
    
`
const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
`;
