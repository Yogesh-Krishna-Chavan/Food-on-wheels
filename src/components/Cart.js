import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-2">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1 className="font-bold text-red-600">Your cart is empty...!</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
