import React, { Component, useEffect } from 'react';
import Topbar from './components/topbar/Navbar';
import Banner from './components/Banner/Banner';
import About from './components/AboutUs/AboutUs';
import Service from './components/OurServices/services';
import Contact from './components/ContactUs/contact';
import './App.css';
import Aos from "aos";
import "aos/dist/aos.css";
 

function App() {
  return (
    <div className="grids" >
         <Topbar  className="boxes"/>
         <Banner  className="boxes"/>
         <About data-aos="fade-up"   className="boxes"/>
         <Service data-aos="fade-up" className="boxes"/>
         <Contact data-aos="fade-up" className="boxes"/>
         <div className="boxes" > 25</div>
    </div>
  )
}


// class App extends Component {
//   render(){
//     useEffect(() =>{
//       Aos.init({duration:2000}); 
//     },[])
//     return(
//       <div className="grids" >
//         <Topbar  className="boxes"/>
//         <Banner  className="boxes"/>
//         <About   className="boxes"/>
//         <Service className="boxes"/>
//         <Contact className="boxes"/>
//       </div>
//     );
//   }
// }

export default App;