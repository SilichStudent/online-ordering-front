import { connect } from 'react-redux';

import { CreateProduct } from './create-product.component';
import { createProduct } from './actions';

function mapStateToProps(state) {
    return { };
}

export default connect(mapStateToProps, { createProduct })(CreateProduct)