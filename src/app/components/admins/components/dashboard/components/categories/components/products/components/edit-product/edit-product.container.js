import { connect } from 'react-redux';

import { EditProduct } from './edit-product.component';
import { getProduct, updateProduct } from './actions'

function mapStateToProps(state) {
    const { editProduct } = state;
    return editProduct;
}

export default connect(mapStateToProps, { getProduct, updateProduct })(EditProduct)