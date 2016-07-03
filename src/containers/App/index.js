import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'normalize.css'
import './style.css'
import Header from 'containers/Header'
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
    <Footer />
  </main>
)

App.propTypes = {
  children: PropTypes.node
}

export default App
