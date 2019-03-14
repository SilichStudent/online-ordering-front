import { connect } from 'react-redux'
import { ChangePassword } from './change-password.component'

import { changePassword } from './actions'

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, { changePassword })(ChangePassword)