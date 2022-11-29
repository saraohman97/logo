import './App.css';
import { Routes, Route } from 'react-router-dom'
import TopNavbar from './components/TopNavbar';
import Navbar from './components/Navbar';
import Home from './views/Home'
import Products from './views/Products'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Navbar />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/products' element={ <Products /> } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
