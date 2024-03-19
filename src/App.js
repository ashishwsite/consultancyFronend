import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ITr from "./components/ITR/ITr";
import Navbar from "./components/Navbar/Navbar";
import NewGST from "./components/GST/NewGST";
import { Outlet } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from "./components/Services/Services";

function App() {
  return (
    <>
  
     <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/itr" element={<ITr/>}/>
        <Route path="/gst" element={<NewGST/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}></Route>
      </Routes>
    </Router> 
    
    
    {/* <ITr/> */}
    {/* <Home/> */}
    {/* <About/>
    <Contact/>
    <NewGST/> */}
   
    <Footer/>
    </>
    
  );
}

export default App;
