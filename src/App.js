import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar.jsx';
import ProductContainer from './pages/Product/ProductContainer.js';
import { Cart } from './pages/Cart/Cart';
import { routeTo } from './navlinkURLs/routePath';
import { ProductListContainer } from './pages/ProductList/ProductListContainer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path={routeTo.HOME_PRODUCTS_LIST} exact component={ProductListContainer} />
          <Route path={routeTo.PRODUCT_ID} component={ProductContainer} />
          <Route path={routeTo.CART} exact component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
