import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/CartView/CartView';
import { CartProvider } from '../src/context/cartContext';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer'


function App() {
  return (

    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route path="/CartView" component={CartView}>
            <CartView />
          </Route>
          <Route path="/ItemDetailContainer/:id" component={ItemDetailContainer}>
            <ItemDetailContainer />
          </Route>
          <Route path="/category/:categoryId/" component={ItemListContainer}>
            <ItemListContainer />
          </Route>
          <Route exact path="/" component={ItemListContainer}>
            <ItemListContainer />
          </Route>
        </Switch>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
