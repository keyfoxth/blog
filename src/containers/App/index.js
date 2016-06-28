import React, { PropTypes } from 'react';
import 'normalize.css';
import './style.css';
import Header from 'containers/Header';

const App = (props) => (
  <main>
    <Header />
    {props.children}
  </main>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
