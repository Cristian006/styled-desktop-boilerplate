// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import {
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Card,
  CardActions,
  CardHeader,
  CardContent,
  CircularProgress,
  Switch,
  Checkbox
} from '@material-ui/core';
import { MenuRounded } from '@material-ui/icons';

type Props = {};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;
`;

const FlexContainer = styled.div`
  padding: 10px 12px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default class Home extends Component<Props> {
  props: Props;

  render() {
    const bull = <span>•</span>;
    return (
      <Container data-tid="container">
        <Typography align="center">Electron + React + Redux + Styled-Components + <br/> MaterialUI + Electron-Settings (Theming) + Frameless-Titlebar Boilerplate</Typography>
        <FlexContainer>
          <div style={{flex: '0.5'}}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="Menu">
                  <MenuRounded />
                </IconButton>
                <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                  News
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
            <FlexContainer>
              <Button variant="outlined">
                Default
              </Button>
              <Button variant="contained" color="primary">
                Primary
              </Button>
              <Button variant="contained" color="secondary">
                Secondary
              </Button>
              <Button variant="contained" color="secondary" disabled>
                Disabled
              </Button>
              <Button variant="contained" href="#contained-buttons">
                Link
              </Button>
            </FlexContainer>
            <FlexContainer>
              <CircularProgress color="inherit" />
              <CircularProgress color="secondary" />
            </FlexContainer>
          </div>
          <Card style={{flexShrink: 0}}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be
                {bull}
                nev
                {bull}o{bull}
                lent
              </Typography>
              <Typography color="textSecondary">
                adjective
              </Typography>
              <Typography component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </FlexContainer>
        <FlexContainer>
          <Switch
            color="primary"
          />
          <Switch
            color="default"
          />
          <Switch
            color="secondary"
          />
          <Checkbox color="primary"/>
          <Checkbox color="secondary"/>
        </FlexContainer>
      </Container>
    );
  }
}
