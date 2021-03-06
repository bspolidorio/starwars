import styled, { createGlobalStyle } from 'styled-components';
import bgIndex from '../../assets/img/bg-index.png';
import searchicon from '../../assets/img/icn-search.svg';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

*{
  box-sizing: border-box;
  margin: 0;
	padding: 0;
}

html{
  font-size: 12px;
}

body{
  min-height: 2000px;
	border: none;
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 600;
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

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${bgIndex});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const HomeHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 263px;
  p {
    margin-top: 21px;
    color: #ffffff;
    text-transform: uppercase;
    text-align: center;
    font-size: 2rem;
    letter-spacing: 0.583rem;
  }
  img {
    display: block;
    width: 350px;
    margin: 0 auto;
  }
  input {
    font-size: 1.5rem;
    color: #a0a9ab;
    width: 430px;
    border: 1px solid #4e5760;
    border-radius: 4px;
    background-color: transparent;
    padding: 15px 30px;
    margin-top: 80px;
    background-image: url(${searchicon});
    background-position: 95% 50%;
    background-repeat: no-repeat;
    background-size: 4%;
  }
  @media (max-width: 450px) {
    padding-top: 80px;
    p {
      font-size: 10px;
      margin-top: 10px;
      letter-spacing: 3px;
    }
    img {
      width: 150px;
    }
    input {
      width: 280px;
      margin-top: 30px;
      font-size: 1rem;
      padding: 5px 10px;
    }
  }
`;

export const CharList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 0px;
`;

export const Avatar = styled.li`
  padding-top: 20px;
  width: 200px;
  height: 240px;
  margin: 10px;
  border: #4e5760 solid 1px;
  border-radius: 4px;
  text-align: center;
  img {
    display: block;
    width: 120px;
    margin: 0 auto;
    padding-top: 15px;
  }
  span {
    display: block;
    margin-top: 40px;
    font-size: 1.333rem;
  }
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: #4e5760;
  }

  @media (max-width: 450px) {
    padding-top: 10px;
    width: 135px;
    height: 160px;
    margin: 5px;
    img {
      width: 80px;
      padding-top: 5px;
    }
    span {
      margin-top: 20px;
      font-size: 1.166rem;
    }
  }
`;
