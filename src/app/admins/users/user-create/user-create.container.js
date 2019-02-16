import { UserCreate } from './user-create.component'
import { connect } from 'react-redux'

import { createUser } from './actions'

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, { createUser })(UserCreate)