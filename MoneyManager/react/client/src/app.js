import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './containers/HomeContainer';
import TransactionsContainer from './containers/TransactionsContainer';
import NewTransactionForm from './components/NewTransactionForm';
import { HashRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';


window.addEventListener('load', function () {
  ReactDOM.render(
    <HashRouter>
      <div>
        <Route exact path='/' component={HomeContainer}/>
        <Route path='/transactions' component={TransactionsContainer} />
        <Route path='/newForm' component={NewTransactionForm}/>
      </div>
    </HashRouter>,
    document.getElementById('app')
  );
});
