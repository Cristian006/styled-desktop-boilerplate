// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <Container data-tid="container">
        <p>Electron + React + Redux + Styled-Components + MaterialUI + Electron-Settings (Theming) + Frameless-Titlebar Boilerplate</p>
      </Container>
    );
  }
}
