import { connect } from 'react-redux'

import { CategoryRename } from './rename-category.component'
import { renameCategory } from './actions'

function mapStateToProps(state) {
    const { categoriesTree: { categoryKey } } = state;
    return { categoryKey };
}

export default connect(mapStateToProps, { renameCategory })(CategoryRename)