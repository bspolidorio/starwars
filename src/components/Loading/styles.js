import styled, { createGlobalStyle } from 'styled-components';

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
  font-family: 'Roboto';
  font-weight: 600;
  background: #000000;
}
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 263px;
  p {
    margin-top: 40px;
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

  @media (max-width: 414px) {
    p {
      font-size: 1rem;
    }
    img {
      width: 150px;
    }
  }
`;
