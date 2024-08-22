import './App.css';
import Subnavbar from './Components/HeadFoot/Subnavbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Footer from './Components/HeadFoot/Footer';
import Editorial from './Components/Editorial/Editorial';
function App() {
  return (
    <>
    <BrowserRouter>
    <Subnavbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/editorial" element={<Editorial/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
