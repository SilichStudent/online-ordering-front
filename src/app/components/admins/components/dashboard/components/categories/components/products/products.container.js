import { connect } from 'react-redux';

import { Products } from './products.component';
import { loadProducts, deleteProduct } from './actions';

function mapStateToProps(state) {
    const { adminProducts: { list, count, error, loading } } = state
    return { products: list, count, error, loading };
}

export default connect(mapStateToProps, { loadProducts, deleteProduct })(Products)