import { connect } from 'react-redux'

import { AdminsManagersRoute } from './manager.component'
import { loadManagers, deleteManager } from './actions'

function mapStateToProps(state) {
    const { managers : { limit, offset, list, count, error, loading }} = state;
    return { limit, offset, list, count, error, loading };
}

export default connect(mapStateToProps, { loadManagers, deleteManager })(AdminsManagersRoute);