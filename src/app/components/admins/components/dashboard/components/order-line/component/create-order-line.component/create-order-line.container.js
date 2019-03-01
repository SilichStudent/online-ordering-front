import { connect } from 'react-redux'

import { OrderLineCreate } from './create-order-line.component'
import { createOrderLine } from './actions'

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, { createOrderLine })(OrderLineCreate)