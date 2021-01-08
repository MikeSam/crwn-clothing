import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { selectCartItems } from '../../redux/cart/cart.selectors';

import "./cart-dropdown.style.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item}></CartItem>
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapToStateProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapToStateProps)(CartDropdown);
