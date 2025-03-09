import { useSelector, useDispatch } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../Redux/cartSlice";
import { EmptyCart } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <div className="flex justify-center items-center">
        <div>
          {cartItems != 0 && (
            <h1 className="font-bold font-serif text-xl ">Cart Items</h1>
          )}
        </div>
        <div>
          {cartItems != 0 && (
            <button
              className="bg-[#e72c0f] font-semibold  text-white ml-140 p-1.5 m-1.5 rounded-xl cursor-pointer"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          )}

          {cartItems == 0 && (
            <div className="mt-20">
              <img src={EmptyCart}></img>
            </div>
          )}
        </div>
      </div>
      <div className="w-7/12 m-auto ">
        <ItemsList items={cartItems}></ItemsList>
      </div>
      <button className="bg-[#50fb17] font-semibold text-white px-3 ml-5 p-1.5 m-1.5 rounded-xl shadow-lg cursor-pointer">
        OrderNow
      </button>
    </div>
  );
};
export default Cart;
