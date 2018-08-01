import React from 'react'
import PropTypes from 'prop-types'

const message = ({message, author})=>(
  <p>
    <i>{author}</i>: {message}
  </p>
)
