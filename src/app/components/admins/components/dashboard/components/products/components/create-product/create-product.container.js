import { connect } from 'react-redux'

import { ProductCreate } from './create-product.component'
import { createProduct } from './actions'

function mapStateToProps(state) {
    const { categoriesTree: { categoryKey } } = state;
    return { categoryKey };
}

export default connect(mapStateToProps, { createProduct })(ProductCreate)