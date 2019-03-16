// @flow
import React, { Fragment, Node } from 'react';
import Titlebar from 'frameless-titlebar';
import settings from 'electron-settings';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core';
import { getTheme, defaultThemeConfig } from '../style/theme';
import Icon from '../../resources/icon.png';

type Props = {
  children: Node
};

const Container = styled.div`
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  flex-direction: column;
  display: flex;
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0px;
    margin: 0px;
  }

  body {
    position: relative;
    height: 100vh;
    overflow-y: hidden;
    background-color: ${props => props.theme.palette.background.default};
    color: ${props => props.theme.palette.text.primary};
    font-family: Arial, Helvetica, Helvetica Neue, serif;
  }

  #root {
    height: inherit;
    overflow-y: hidden;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default class App extends React.Component<Props> {
  props: Props;
  
  constructor(props) {
    super(props);
    this.themeObserver = null;
    this.state = {
      currentTheme: getTheme(settings.get('settings.theme', defaultThemeConfig)),
    };
  }

  componentDidMount() {
    this.themeObserver = settings.watch('settings.theme', (newValue, oldValue) => {
      if (newValue.paletteType !== oldValue.paletteType || newValue.accentColor !== oldValue.accentColor) {
        // dark mode changed, or accent color changed - recreate mui theme
        this.setState({
          // always use the newValue
          currentTheme: getTheme(newValue),
        });
      }
    });
  }

  componentWillUnmount() {
    this.themeObserver.dispose();
  }

  render() {
    const { currentTheme } = this.state;
    const { titlebarTheme } = currentTheme;
    return (
      <MuiThemeProvider theme={currentTheme}>
        <ThemeProvider theme={currentTheme}>
          <Fragment>
            <Titlebar
              app="Electron Boilerplate"
              icon={Icon}
              theme={titlebarTheme}
            />
            <GlobalStyle /> 
            <Container>
              {this.props.children}
            </Container>
          </Fragment>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}
