import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

/*
 * The purchase failure container
 */
class ProductsContainer extends Component {
  render() {
    const { products } = this.props

    const sportsProducts = products.filter(product => product !== undefined && product.category === 'sports'),
      newsProducts = products.filter(product => product !== undefined && product.category === 'news');

    return (
      <section id="products-container">
        <ProductsList title="sportsProducts">
          {sportsProducts.map(product =>
            <ProductItem
              key={product.id}
              product={product}
              onAddToCartClicked={() => this.props.addToCart(product.id)} />
          )}
        </ProductsList>
        <ProductsList title="newsProducts">
          {newsProducts.map(product =>
            <ProductItem
              key={product.id}
              product={product}
              onAddToCartClicked={() => this.props.addToCart(product.id)} />
          )}
        </ProductsList>
      </section>
    )
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    products: getVisibleProducts(state.products)
  }
}

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
