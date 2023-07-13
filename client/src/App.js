
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import EditProduct from './components/EditProduct';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProduct from './components/CreateProduct';
function App() {
  return (
    <div className="App">
  
    <Router>
    <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        
      </Router>
    
    </div>
  );
}

export default App;
