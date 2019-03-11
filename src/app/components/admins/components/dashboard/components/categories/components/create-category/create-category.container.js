import { connect } from 'react-redux'

import { CategoryCreate } from './create-category.component'
import { createCategory } from './actions'

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, { createCategory })(CategoryCreate)