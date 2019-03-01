import { connect } from 'react-redux'
import { AdminLogin } from './admin-login.component'
import { authManager, loadCurrentManager } from './actions'

function mapStateToProps(state) {
    const { currentManager } = state;
    return { currentManager };
}

export default connect(mapStateToProps, { authManager, loadCurrentManager })(AdminLogin)