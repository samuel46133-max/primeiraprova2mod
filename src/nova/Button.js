import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  return (
    <Button onClick={props.onClick}>{props.children}</Button>
  )
}

Button.propTypes = {}

export default Button