import React from 'react';
import * as S from './styles';
import logo from '../../assets/img/logo-sw.png';

export default function Loading() {
  return (
    <React.Fragment>
      <S.GlobalStyle />
      <S.LoadingWrapper>
        <img src={logo} alt=""></img>
        <p>Loading</p>
      </S.LoadingWrapper>
    </React.Fragment>
  );
}
