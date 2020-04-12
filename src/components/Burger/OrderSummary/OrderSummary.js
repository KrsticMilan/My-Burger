import React from "react";

import Aux from "../../../hoc/Aux";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (ingredientsKey) => {
      return (
        <li key={ingredientsKey}>
          <span style={{ textTransform: "capitalize" }}>{ingredientsKey}</span>:{" "}
          {props.ingredients[ingredientsKey]}
        </li>
      );
    }
  );
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout</p>
    </Aux>
  );
};

export default orderSummary;
