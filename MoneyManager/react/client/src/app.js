import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './containers/HomeContainer';
import TransactionsContainer from './containers/TransactionsContainer';
import { HashRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';


window.addEventListener('load', function () {
  ReactDOM.render(
    <HashRouter>
      <div>
        <Route exact path='/' component={HomeContainer}/>
        <Route path='/transactions' component={TransactionsContainer} />
      </div>
    </HashRouter>,
    document.getElementById('app')
  );
});
