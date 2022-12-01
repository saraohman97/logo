import './App.css';
import { Routes, Route } from 'react-router-dom'
import TopNavbar from './components/TopNavbar';
import Navbar from './components/Navbar';
import Home from './views/Home'
import Footer from './components/Footer';
import ProductsView from './views/ProductsView';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Navbar />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/products' element={ <ProductsView /> } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
