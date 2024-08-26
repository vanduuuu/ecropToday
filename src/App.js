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
import Guideline from './Components/Guideline/Guideline';
import Submission from './Components/Submission/Submission';
import Submitarticle from './Components/Submission/Submitarticle';
import Contact from './Components/Contact/Contact';
import Archives from './Components/Archives/Archives';
import Scrolltotop from './Components/Scroll/Scrolltotop';
function App() {
  return (
    <>
    <BrowserRouter>
    <Subnavbar/>
    <Scrolltotop/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/archive" element={<Archives/>}/>
      <Route path="/editorial" element={<Editorial/>}/>
      <Route path="/guideline" element={<Guideline/>}/>
      <Route path="/submission" element={<Submission/>}/>
      <Route path="/submitarticle" element={<Submitarticle/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
