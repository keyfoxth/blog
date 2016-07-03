import React from 'react'
import { Link } from 'react-router/es6'
import './style.css'

export default () => (
  <section className="home">
    <p>Posts</p>
    <section className="posts">
      <Link to="/test"><h2>test</h2></Link>
    </section>
  </section>
)
