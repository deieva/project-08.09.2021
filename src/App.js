import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Page404 from './Views/Page404';
import Categories from './Views/Categories';
import Category from './Views/Category';
import Product from './Views/Product';
import Cart from './Views/Cart';
import Home from './Views/Home';

function App() {
  return (
    <div>
    <Router>
        <Header />
        <Switch>

            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/categories">
                <Categories />
            </Route>

            <Route path="/category">
                <Category />
            </Route>

            <Route path="/product">
                <Product/>  
            </Route>

            <Route path="/cart">
                <Cart />
            </Route>

            <Route>
                <Page404 />
            </Route>

        </Switch>
        <Footer />
    </Router>

</div>
);
}


export default App;
