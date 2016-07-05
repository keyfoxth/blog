import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'normalize.css'

import './style'
import Header from 'containers/Header'
import Rocket from 'containers/Rocket'
import Footer from 'containers/Footer'

const App = (props) => (
  <main>
    <Header />
    <ReactCSSTransitionGroup
      component="section"
      className="containers"
      transitionName="animation"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {
        React.cloneElement(props.children, {
          key: location.pathname
        })
      }
    </ReactCSSTransitionGroup>
    <Rocket />
    <Footer />
  </main>
)

App.propTypes = {
  children: PropTypes.node
}

export default App
