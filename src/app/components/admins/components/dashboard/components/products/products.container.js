import { connect } from 'react-redux';
import { Products } from './products.component';
import { loadCategoriesTree, selectCategoryTab, deleteCategory, deleteProduct } from './actions';

function mapStateToProps(state) {
    const { categoriesTree: { limit, offset, count, list, error, loading, categoryKey } } = state;

    return { limit, offset, list, count, error, loading, categoryKey };
}

export default connect(mapStateToProps, { loadCategoriesTree, selectCategoryTab, deleteCategory, deleteProduct })(Products)