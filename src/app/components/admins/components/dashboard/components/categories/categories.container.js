import { connect } from 'react-redux';
import { Categories } from './categories.component';
import { loadCategories, deleteCategory } from './actions';

function mapStateToProps(state) {
    const { categoriesTree: { limit, offset, count, list, error, loading, categoryKey } } = state;

    return { limit, offset, list, count, error, loading, categoryKey };
}

export default connect(mapStateToProps, { loadCategories, deleteCategory })(Categories)