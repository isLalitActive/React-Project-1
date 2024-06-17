import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="text-center m-4 p-4">
      <div className="w-6/12 m-auto">
        <h1 className="font-bold text-2xl">Cart</h1>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
