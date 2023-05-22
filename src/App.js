import Header from './components/Header';
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'
import Footer from './components/Footer';
import Thanks from './components/Thanks';
import Menu from './components/MenuEditor';
import Admin from './components/Admin';
import Crud from './components/Crud';
import Signup from './components/buttons/Signup';


function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/thanks" component={Thanks} />
        <Route exact path="/crud" component={Crud} />
        <Route exact path="/sign" component={Signup} />
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;

