import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from "react-redux"
import { useEffect, Fragment } from "react"
import Notification from './components/UI/Notification';
import { sendingCartData, fetchingCartData } from "./store/cart-action-thunk"

let initialRun = true;

function App() {
  const cartShow = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    dispatch(fetchingCartData())
  }, [dispatch])

  useEffect(() => {
    if (initialRun) {
      initialRun = false
      return
    }

    if (cart.changes) {
      dispatch(sendingCartData(cart))
    }

  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && <Notification title={notification.title} status={notification.status} message={notification.message} />}
      <Layout>
        {cartShow && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
