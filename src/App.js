import './App.css';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Logo from './components/Logo/Logo';
import { CartView } from './components/CartView/CartView';
import { CartProvider } from '../src/context/cartContext';


function App() {
  return (

    <BrowserRouter>
      <CartProvider>
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
          <Route exact path="/">
            <ItemListContainer />
          </Route>
        </Switch>
      </CartProvider>
    </BrowserRouter>


  );
}

export default App
