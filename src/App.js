import './App.css';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Logo from './components/Logo/Logo';

function App() {

  return (

    <BrowserRouter>
      <Switch>
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
    </BrowserRouter>

  );
}

export default App
