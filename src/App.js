import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./store/cart-slice";


function App() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.cart.show);


  const showCartHandler = () => {
    dispatch(cartActions.showCart());
  };

  return (
    <Layout cartShowHandler={showCartHandler}>
      {show && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
