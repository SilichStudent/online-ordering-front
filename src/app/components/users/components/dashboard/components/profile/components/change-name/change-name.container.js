import { connect } from 'react-redux'
import { ChangeName } from './change-name.component'

function mapStateToProps(state) {
    const { currentUser: { name } } = state;
    return { name };
}

export default connect(mapStateToProps)(ChangeName)