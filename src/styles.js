import styled, { createGlobalStyle } from 'styled-components';
import bgIndex from './img/bg-index.png';
import bgChar from './img/bg-char.png';
import searchicon from './img/icn-search.svg';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

*{
  box-sizing: border-box;
  #4E5760
#FFFFFF
#007DA9
#A0A9AB
}

body, p, ul {
  
  font-family: Roboto;
  font-size: 12px;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

body{
  background-color: black;
}
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-image: url(${bgIndex});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: black;
  min-height: 2000px;
`;

export const HomeHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 263px;
  p {
    margin-top: 21px;
    color: white;
    text-transform: uppercase;
    text-align: center;
    font-size: 24px;
    letter-spacing: 7px;
  }
  img {
    display: block;
    width: 350px;
    margin: 0 auto;
  }
  input[type='text'] {
    font-size: 18px;
    color: #808080;
    width: 430px;
    border: 1px solid #383838;
    border-radius: 4px;
    background-color: transparent;
    padding: 15px 30px;
    margin-top: 80px;
    background-image: url(${searchicon});
    background-position: right 18px top 15px;
    background-repeat: no-repeat;
    background-size: 4%;
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
  border: #383838 solid 1px;
  border-radius: 4px;
  color: #808080;
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
    font-size: 16px;
  }
`;
export const CharWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'header header header header header header header '
    '.  avatar avatar details details details . ';
  max-width: 100%;
  margin: 0 auto;
`;
export const CharHeader = styled.div`
  grid-area: header;
  height: 182px;
  background-image: url(${bgChar});
  background-repeat: no-repeat;
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
  grid-area: avatar;
  justify-self: end;
  padding: 80px 31px;
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
`;

export const CharDetailsWrapper = styled.div`
  grid-area: details;
  padding: 105px 50px;
  color: gray;
  p {
    font-size: 16px;
  }
`;

export const CharDetails = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  width: 600px;
  padding-top: 20px;
  color: #ffffff;
  p {
    width: 173px;
    height: 46px;
    color: #ffffff;
    font-size: 20px;
    text-transform: uppercase;
    line-height: 16px;
    span {
      text-transform: none;
      font-size: 14px;
      color: #4e5760;
    }
  }
`;

export const CharFilms = styled.ul`
  grid-area: films;
  display: flex;
  flex-flow: column;
  padding-top: 10px;
  p {
    font-size: 16px;
    color: #4e5760;
  }
  li {
    font-size: 18px;

    line-height: 40px;
    a:visited,
    :hover,
    :active {
      color: #007da9;
    }
  }
`;

export const FilmWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'header header header header header header header '
    '.  cover cover details details details . '
    '. chars chars chars chars chars .';
  max-width: 100%;
  margin: 0 auto;
`;

export const FilmHeader = styled(CharHeader)``;

export const FilmCover = styled.div`
  grid-area: cover;
  justify-self: end;
  padding: 80px 0px 0px;
  img {
    display: block;
    width: 274px;
    padding-top: 13px;
  }
`;

export const FilmDetails = styled.div`
  grid-area: details;
  width: 640px;
  padding: 97px 103px;
  p {
    font-size: 14px;
    color: #4e5760;
  }
  h1 {
    font-size: 25px;
    letter-spacing: 2px;
    line-height: 1px;
    color: #ffffff;
  }
  h2 {
    padding-top: 20px;
    font-size: 18px;
    line-height: 21px;
    font-weight: normal;
    letter-spacing: 1px;
    color: #4e5760;
  }
  div {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    p {
      width: 140px;
      padding-top: 10px;
      font-size: 20px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #ffffff;
      span {
        color: #4e5760;
        font-size: 12px;
        letter-spacing: 0px;
        text-transform: none;
      }
    }
  }
`;

export const FilmCharConnections = styled(CharList)`
  grid-area: chars;
`;
