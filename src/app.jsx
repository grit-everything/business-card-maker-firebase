import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Login from './components/login/login';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Header />
        </Route>
        <Route>
          <Login />
        </Route>
        <Route>
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
