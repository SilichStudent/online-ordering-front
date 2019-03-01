import { ManagerCreate } from './manager-create.component'
import { connect } from 'react-redux'

import { createManager } from './actions'

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, { createManager })(ManagerCreate)