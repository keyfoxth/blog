import React from 'react'

import './style'

export default class Rocket extends React.Component{
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const rocket = document.querySelector('.rocket'),
            scrollTop = document.body.scrollTop
      if (scrollTop) {
        if (!rocket.className.match(/(?:^|\s)rocket-show(?!\S)/))
          rocket.className += ' rocket-show'
      } else {
        rocket.className = 'rocket'
      }
    }, false)
  }
  render() {
    return (
      <a className="rocket" href="#top" target="_self">&uarr;</a>
    )
  }
}
