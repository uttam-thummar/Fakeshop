import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import CategorizedProducts from './containers/CategorizedProducts';

function App() {

  return (
    <div>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/products"/>
        </Route>
        <Route path="/products" exact component={ProductListing} />
        <Route path="/products/:category" exact component={CategorizedProducts} />
        <Route path="/product/:productId" exact component={ProductDetails} />
        <Route>404 NOT FOUND!</Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
