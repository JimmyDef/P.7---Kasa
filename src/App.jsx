
// import './../App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/404/NotFound';
import Lodging from './pages/lodging/Lodging';
import About from './pages/about/About';
import Home from './pages/home/Home';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
    
<>
 <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/lodging/:id' element={<Lodging/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
 <Footer/>
</>



  );
}

export default App;
