import { connect } from 'react-redux'
import { OrderLines } from './order-line.component'
import { loadOrderLine } from './actions'

function mapStateToProps(state) {
    const { userOrderLine } = state;
    return userOrderLine;
}

export default connect(mapStateToProps, { loadOrderLine })(OrderLines)