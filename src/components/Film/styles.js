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
  min-width: 480px;
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
export const FilmWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilmHeader = styled.div`
  grid-area: header;
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

export const FilmDetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 97px;
`;

export const FilmCover = styled.div`
  img {
    width: 274px;
  }
`;

export const FilmDetails = styled.div`
  max-width: 640px;
  padding-left: 103px;
  & > dl {
    div {
      display: flex;
      flex-direction: column;
      dd {
        padding-top: 5px;
        font-size: 2.083rem;
        letter-spacing: 0.166rem;
        line-height: 1rem;
        color: #ffffff;
      }
      dt {
        font-size: 1.333rem;
        color: #4e5760;
      }
    }
  }

  p {
    padding-top: 20px;
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 1px;
  }
  & > div {
    dl {
      display: flex;
    }
    div {
      display: flex;
      flex-direction: column-reverse;
      padding-top: 20px;
    }
    dd {
      width: 140px;
      padding-top: 10px;
      font-size: 1.666rem;
      letter-spacing: 1px;
      line-height: 1.916rem;
      text-transform: uppercase;
      color: #ffffff;
    }
    dt {
      font-size: 1.083rem;
    }
  }

  @media (max-width: 930px) {
    margin: 0 auto;
    padding: 0 40px;
    p {
      text-align: center;
    }
    & > dl {
      div {
        dd,
        dt {
          text-align: center;
        }
      }
    }
    & > div {
      dl {
        justify-content: center;
        dd,
        dt {
          text-align: center;
        }
      }
    }
  }
`;

export const FilmCharConnections = styled.ul`
  grid-area: chars;
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
    color: #4e5760;
  }
`;
