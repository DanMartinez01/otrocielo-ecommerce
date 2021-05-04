import './App.css';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div>
            <NavBar />
            <ItemListContainer />
          </div>
        </Route>

        <Route path="/ItemDetailContainer/:id" component={ItemDetailContainer}>
          <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App
