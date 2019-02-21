import { connect } from 'react-redux';
import { Products } from './products.component';
import { loadCategoriesTree } from './actions';

function mapStateToProps(state) {
    const { categoriesTree: { limit, offset, count, list, error, loading } } = state;

    return { limit, offset, list, count, error, loading };
}

export default connect(mapStateToProps, { loadCategoriesTree })(Products)