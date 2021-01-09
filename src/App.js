import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { AppState } from "./store/store.js";
import { ProductList } from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product.jsx";
import { Cart } from "./pages/Cart/Cart";
import { routeTo } from "./navlinkURLs/routePath";

function App() {
  return (
    <AppState>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route
              path={routeTo.HOME_PRODUCTS_LIST}
              exact
              component={ProductList}
            />
            <Route path={routeTo.PRODUCT_ID} component={Product} />
            <Route path={routeTo.CART} exact component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    </AppState>
  );
}

export default App;
