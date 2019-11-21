import styled, { createGlobalStyle } from 'styled-components';
import bgSmall from '../../assets/img/bg-small.png';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

*{
  box-sizing: border-box;
  margin: 0px;
	padding: 0px;
}

html{
  font-size: 12px;
}

body{
  min-height: 2000px;
	border: none;
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.025rem;
  line-height: 2.1428;
  color: #4E5760;
  background: #000000;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
`;

export const CharWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CharHeader = styled.div`
  height: 182px;
  background-image: url(${bgSmall});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  p {
    margin-top: 12px;
    color: white;
    text-transform: uppercase;
    text-align: center;
    font-size: 16px;
    letter-spacing: 4px;
  }
  img {
    display: block;
    padding-top: 29px;
    width: 231px;
    margin: 0 auto;
  }
`;

export const CharAvatar = styled.div`
  margin-right: 80px;
  img {
    display: block;
    width: 279px;
    padding-top: 10px;
  }
  span {
    display: block;
    margin-top: 18px;
    color: white;
    text-align: center;
    font-size: 24px;
  }

  @media (max-width: 450px) {
    margin: 0 auto;
    img {
      width: 150px;
    }
  }
`;

export const CharDetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 80px;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  @media (max-width: 450px) {
    max-width: 320px;
    margin-top: 30px;
  }
`;

export const CharDetails = styled.div`
  p {
    font-size: 1.333rem;
    font-weight: 600;
  }
  dl {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  div {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 15px;
    width: 130px;
  }

  dt {
    line-height: 0px;
  }

  dd {
    color: #ffffff;
    font-size: 1.666rem;
    text-transform: uppercase;
    margin: 0px;
  }

  @media (max-width: 450px) {
    p {
      text-align: center;
    }
    dt {
      text-align: center;
    }
    dd {
      text-align: center;
    }
  }
`;

export const CharFilms = styled.ul`
  padding-top: 10px;
  p {
    font-size: 1.333rem;
    font-weight: 600;
  }
  li {
    font-size: 1.5rem;
    line-height: 3.333rem;
  }
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: #007da9;
  }

  @media (max-width: 450px) {
    padding-top: 20px;
    p {
      text-align: center;
    }
    li {
      padding: 0 10px;
      text-align: center;
    }
  }
`;
