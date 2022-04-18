import React from 'react';
import './App.css';
import MainPage from './page/MainPage';
import LibraryPage from './page/LibraryPage';
import AppStateProvider from './providers/AppStateProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
   <>
    <AppStateProvider>
      <BrowserRouter>
        <Switch>
          <Route component={MainPage} exact path='/' />
          <Route component={LibraryPage} path='/library' />
        </Switch>
      </BrowserRouter>
    </AppStateProvider>
   </>
  );
}

export default App;
