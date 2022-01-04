import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components';

import { Card, Content, Grid, NewButton, Numbers, Title  } from './components';
import { configureStore, unregister, register } from './core';
import { GlobalStyles, theme } from './styles';

const { persistor, store } = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
    <GlobalStyles/>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
     <Content data-cy="content">
      <Title data-cy="title">Sudoku</Title>
    
  
    <Card data-cy="card">
      <NewButton />
      <Grid />
      <Numbers />
    </Card>
    </Content>
      </PersistGate>
    </Provider>
    
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

unregister();
