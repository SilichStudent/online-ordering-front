import { connect } from 'react-redux'
import { Dashboard } from './dashboard.component'

function mapStateToProps(state) {
    const { currentManager } = state;
    return { currentManager };
}

export default connect(mapStateToProps)(Dashboard)