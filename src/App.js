import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ITr from "./components/ITR/ITr";
import Navbar from "./components/Navbar/Navbar";
import NewGST from "./components/GST/NewGST";
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./components/Services/Services";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
// import Usercontext from "./components/context/Usercontext";
import Userstate from "./components/context/Userstate";
import Admin from "./Admin";
function App() {
  const [progress, setProgress] = useState(0);
  return (
    <>
    <Userstate>
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route exact path="/" element={<Home setProgress={setProgress} />} />
          <Route path="/itr" element={<ITr setProgress={setProgress} progress={progress} />} />
          <Route path="/gst" element={<NewGST setProgress={setProgress} />} />
          <Route
            path="/contact"
            element={<Contact setProgress={setProgress} />}
          />
          <Route path ="/adminlogin" element={<Admin/>}/>
          <Route path="/about" element={<About setProgress={setProgress} progress={progress} />} />
          <Route
            path="/services"
            element={<Services setProgress={setProgress} />}
          ></Route>
         </Routes>
      </Router>
      <Footer />
      </Userstate>
    </>
  );
}

export default App;
