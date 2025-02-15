import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contacts';

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='contacts' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
