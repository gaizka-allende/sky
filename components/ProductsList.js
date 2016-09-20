import React, { Component, PropTypes } from 'react'

export default class ProductsList extends Component {
  render() {
    return (
      <div className="product-category">
        <h3 className="category-title">{this.props.title}</h3>
        <ul className="product-list">{this.props.children}</ul>
      </div>
    )
  }
}

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}
