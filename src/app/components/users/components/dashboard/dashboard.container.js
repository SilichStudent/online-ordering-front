import { connect } from 'react-redux'
import { Dashboard } from './dashboard.component'

function mapStateToProps(state) {
    const { currentUser } = state;
    return { currentUser };
}

export default connect(mapStateToProps)(Dashboard)