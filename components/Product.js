import React, { Component, PropTypes } from 'react'

export default class Product extends Component {
  render() {
    const { title } = this.props
    return <span className="product-title" >{title}</span>
  }
}

Product.propTypes = {
  title: PropTypes.string
}
