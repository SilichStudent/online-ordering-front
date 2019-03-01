import { connect } from 'react-redux'
import { UserLogin } from './user-login.component'
import { authUser, loadCurrentUser } from './actions'

function mapStateToProps(state) {
    const { currentUser } = state;
    return { currentUser };
}

export default connect(mapStateToProps, { authUser, loadCurrentUser })(UserLogin)