import { connect } from 'react-redux'
import { ChangeName } from './change-name.component'

import { changeName } from './actions'

function mapStateToProps(state) {
    const { currentUser: { name } } = state;
    return { name };
}

export default connect(mapStateToProps, { changeName })(ChangeName)