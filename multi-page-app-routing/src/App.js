import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./component/MainHeader";
import Product from "./pages/Product";
import Welcome from "./pages/Welcome";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>

          <Route path="/product/:productId">
            <ProductDetail />
          </Route></Switch>
      </main>
    </div >
  );
}

export default App;
