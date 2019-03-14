import { connect } from 'react-redux'
import { UserCart } from './cart.component'
import { loadCart, checkout } from './actions'

function mapStateToProps(state) {
    const { userCart } = state;
    return userCart;
}

export default connect(mapStateToProps, { loadCart, checkout })(UserCart)