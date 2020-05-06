import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import styled, { ThemeProvider } from 'styled-components'
import Theme from '../css/theme'
export default class AppContainer extends Component {
  
  render() {
    const supportsHistory = 'pushState' in window.history;
    return (
      <div>
        <Router
        forceRefresh={!supportsHistory}
        >
          <Switch>
            <ThemeProvider theme={Theme}>
              <Route path="/" component={MainLayout} />
            </ThemeProvider>
          </Switch>
        </Router>
      </div>
    );
  }
}
