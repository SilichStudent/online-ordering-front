import { connect } from 'react-redux'
import { OrderLine } from './order-line.component'
import { loadOrderLines } from './actions'

function mapStateToProps(state) {
    const { orderLines: { limit, offset, list, count, error, loading } } = state;
    return { limit, offset, list, count, error, loading };
}


export default connect(mapStateToProps, { loadOrderLines })(OrderLine)