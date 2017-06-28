// Include the Main React Dependenciesvar React = require('react');
var React = require('react');
var ReactDOM = require('react-dom');

require('./styles/main.scss')

// Include the Header Component
var Header = require('./components/Header');
var Body = require('./components/Body');
var Footer = require('./components/Footer');

ReactDOM.render(
  <div class='page-wrapper'>
    <Header />
    <Body />
    <Footer />
  </div>,
  document.getElementById('app')
);

