import { connect } from 'react-redux'
import { Dashboard } from './dashboard.component'

function mapStateToProps(state) {
    const { currentUser, usersOrderLineProducts } = state;
    return { currentUser, cartProductsQuantity: usersOrderLineProducts.quantity };
}

export default connect(mapStateToProps)(Dashboard)