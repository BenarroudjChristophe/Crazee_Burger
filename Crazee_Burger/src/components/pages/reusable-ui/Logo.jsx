import { styled } from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>crazee</h1>
      <img src="/images/logo-orange.png.png" alt="logo" />
      <h1>burger</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  /* background: blue; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* transform: scale(1.1); */

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
`;