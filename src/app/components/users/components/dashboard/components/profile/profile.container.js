import { connect } from 'react-redux'
import { Profile } from './profile.component'

function mapStateToProps(state) {
    const { currentUser } = state;
    return { currentUser };
}

export default connect(mapStateToProps)(Profile)