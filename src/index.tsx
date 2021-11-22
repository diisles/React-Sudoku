import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { Card, Content, Grid, Title  } from './components';
import { unregister } from './core';
import { GlobalStyles, theme } from './styles';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
    <GlobalStyles/>
    <Content data-cy="content">
    <Title data-cy="title">Sudoku</Title>
    </Content>
  
    <Card data-cy="card">test
    </Card>
    <Grid />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

unregister();
