import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './containers/HomeContainer'

window.addEventListener('load', function () {
  ReactDOM.render(
    <HomeContainer />,
    document.getElementById('app')
  );
});
