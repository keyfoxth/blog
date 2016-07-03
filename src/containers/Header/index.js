import React from 'react'
import { Link } from 'react-router'

import './style'

export default () => (
  <header>
    <h1 className="name">Keyfoxth</h1>
    <Link to="/" className="me">
      <img src="https://avatars0.githubusercontent.com/u/10647132" />
    </Link>
  </header>
)
