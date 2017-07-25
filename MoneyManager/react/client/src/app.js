import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './containers/HomeContainer';
import TransactionsContainer from './containers/TransactionsContainer';
import CategoriesHome from './containers/CategoriesHome';
import { HashRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';


window.addEventListener('load', function () {
  ReactDOM.render(
    <HashRouter>
      <div>
        <Route exact path='/' component={HomeContainer}/>
        <Route path='/transactions' component={TransactionsContainer}/>
        <Route path='/categoriesHome' component={CategoriesHome}/>
      </div>
    </HashRouter>,
    document.getElementById('app')
  );
});
