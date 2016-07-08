import React from 'react'
import ReactMarkdown from 'react-markdown'

import post from 'raw!./md/test.md'
import './style'

export default () => (
  <ReactMarkdown source={post} className="post"/>
)
