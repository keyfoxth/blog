import React from 'react';
import { Link } from 'react-router/es6';
import './style.css';

export default () => (
  <section className="home">
    <h2>Post</h2>
    <div className="articles">
      <Link to="/test"><h3>test</h3></Link>
    </div>
  </section>
);
