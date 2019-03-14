import { connect } from 'react-redux'
import { Products } from './products.component'
import { loadProducts, loadOrderLine, addProductToCart } from './actions'

function mapStateToProps(state) {
    const { usersOrderLineProducts } = state;
    return usersOrderLineProducts ;
}

export default connect(mapStateToProps, { loadProducts, loadOrderLine, addProductToCart })(Products)