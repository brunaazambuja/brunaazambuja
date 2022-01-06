import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard'
import * as themeObj from './theme/schema.json';
import { GlobalStyles } from './theme/global';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastProvider } from './hooks/toast';

const Container = styled.div`
  position: relative;
  overflow: hidden;

  .top, .bottom {
    position: absolute;
    z-index: -1;
  }
  .top { top: -40rem; }
  .bottom { 
    position: absolute;
    bottom: -40rem; 
  }
`

const App = () => {
  const [theme] = useState(themeObj);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ToastProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <Dashboard/>
              </Route>
            </Switch>
            <GlobalStyles />
          </BrowserRouter>
        </ToastProvider>  
      </Container>
    </ThemeProvider>
  );
};

export default App;
