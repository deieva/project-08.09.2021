import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Page404 from './Views/Page404';

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
                <Articles />
            </Route>

            <Route path="/category">
                <Article />
            </Route>

            <Route path="/product">
                <Chat/>  
            </Route>

            <Route path="/cart">
                <Register />
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
