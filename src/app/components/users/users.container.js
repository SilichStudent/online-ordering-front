import { connect } from 'react-redux'
import { UserRoutes } from './users.component'

function mapStateToProps(state) {
    const { currentUser } = state;
    return { currentUser };
}

export default connect(mapStateToProps)(UserRoutes)