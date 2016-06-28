import React from 'react';
import { Link } from 'react-router';
import './style.css';

export default () => (
  <header>
    <h1>Keyfoxth</h1>
    <div className="me">
      <Link to="/">
        <img className="my-img" src="https://avatars0.githubusercontent.com/u/10647132" />
      </Link>
    </div>
  </header>
)
