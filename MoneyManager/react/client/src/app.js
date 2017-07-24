import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './containers/HomeContainer';
import TransactionsContainer from './containers/TransactionsContainer';
import NewTransactionForm from './components/NewTransactionForm';
import CategoriesHome from './containers/CategoriesHome'
import NewCategoryForm from './components/NewCategoryForm'
import { HashRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';


window.addEventListener('load', function () {
  ReactDOM.render(
    <HashRouter>
      <div>
        <Route exact path='/' component={HomeContainer}/>
        <Route path='/transactions' component={TransactionsContainer}/>
        <Route path='/newForm' component={NewTransactionForm}/>
        <Route path='/categoriesHome' component={CategoriesHome}/>
        <Route path='/CategoriesHome/new' component={NewCategoryForm}/>
      </div>
    </HashRouter>,
    document.getElementById('app')
  );
});
