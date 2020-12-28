import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { AppState } from './store/store.js';
import { ProductsList } from './pages/ProductList/ProductList';
import { Product } from './pages/Product/Product';
import { Cart } from './pages/Cart/Cart';

function App() {
  return (
    <AppState>
      <BrowserRouter>
        <Navbar />

        <div className="container">
          <Switch>
            <Route path={'/'} exact component={ProductsList} />
            <Route path={'/product/:productId?'} exact component={Product} />
            <Route path={'/cart'} exact component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    </AppState>
  );
}

export default App;
