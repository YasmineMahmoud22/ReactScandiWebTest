import React,{Fragment} from 'react';
import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/pages/Home';
import Category from './components/pages/CategoryPage';
import Product from './components/pages/ProductPage';
import CartPage from './components/pages/CartPage';

class App extends React.Component {
  render(){
    return (
        <Router>
         <Fragment>
            <NavBar/>
            <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/:categoryName" element={<Category/>}/>
            <Route path ="/products/:productID" element ={<Product/>}/>
            <Route path ="/cart" element={<CartPage/>}/>
            </Routes>
         </Fragment>
        </Router>

  );
  }
  
}

export default App;
