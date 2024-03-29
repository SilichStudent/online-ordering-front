import { connect } from 'react-redux'
import { AdminsUsersRoute } from './users.component'
import { loadUsers, updateUser, deleteUser } from './actions'

function mapStateToProps(state) {
    const { users : { limit, offset, list, count, error, loading }} = state;
    return { limit, offset, list, count, error, loading };
}

export default connect(mapStateToProps, { loadUsers, updateUser, deleteUser })(AdminsUsersRoute);