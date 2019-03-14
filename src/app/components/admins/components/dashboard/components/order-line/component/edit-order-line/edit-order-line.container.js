import { connect } from "react-redux";

import { OrderLineUpdate } from "./edit-order-line.component";
import { loadOrderLine, updateOrderLine } from "./actions";
import { loadCategories, loadProducts } from "../create-order-line/actions"

function mapStateToProps(state) {
  const { editOrderLine, createOrderLine } = state;
  const { categories, products } = createOrderLine;

  const productsAdded = editOrderLine.products;
  const categoriesAdded = editOrderLine.categories;

  return { ...editOrderLine, categories, products, productsAdded, categoriesAdded };
}

export default connect(
  mapStateToProps,
  { loadOrderLine, updateOrderLine, loadCategories, loadProducts }
)(OrderLineUpdate);
