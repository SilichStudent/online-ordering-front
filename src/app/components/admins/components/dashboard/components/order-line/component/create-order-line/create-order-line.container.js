import { connect } from "react-redux";

import { OrderLineCreate } from "./create-order-line.component";
import { createOrderLine } from "./actions";
import { loadCategories, loadProducts } from "./actions";

function mapStateToProps(state) {
  const { createOrderLine } = state;
  const { categories, products } = createOrderLine;
  return { categories, products };
}

export default connect(
  mapStateToProps,
  { createOrderLine, loadCategories, loadProducts }
)(OrderLineCreate);
