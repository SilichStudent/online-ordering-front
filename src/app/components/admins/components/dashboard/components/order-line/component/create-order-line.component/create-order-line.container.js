import { connect } from "react-redux";

import { OrderLineCreate } from "./create-order-line.component";
import { createOrderLine } from "./actions";
import { loadCategoriesTree } from "../../../products/actions";

function splitToCategoriesAndProducts(categoriesTree) {
  const categories = [];
  const products = [];

  categoriesTree.list.forEach(category => {
    if (category.name !== "default") {
      categories.push({ id: category.id, name: category.name });
    }
      Object.values(category.products).forEach(product => {
        products.push({ id: product.id, name: product.name });
      });
  });

  return { categories, products };
}

function mapStateToProps(state) {
  const { categoriesTree } = state;
  const { categories, products } = splitToCategoriesAndProducts(categoriesTree);
  return { categoriesTree, categories, products };
}

export default connect(
  mapStateToProps,
  { createOrderLine, loadCategoriesTree }
)(OrderLineCreate);
