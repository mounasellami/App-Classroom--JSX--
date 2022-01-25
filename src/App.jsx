import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import SearchBox from './Components/SearchBox/SearchBox';
import Watch from './Components/Watch/Watch';
import Footer from './Components/Footer/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
 
  const isWeekend=([0,6].indexOf(new Date().getDay()) !== -1); ;// 6 = Saturday, 0 = Sunday
  // const isWeekend=true;

  if (isWeekend) {
    return( 
     <div className="App-section">
        <Header/>
        <About/>
        <h3> Enjoy is a weekend :) Keep remember your question to monday.</h3> 
        <Watch/>
        <Footer/>
     </div>
    );
   };
   return(
      <div className="App-section">
        <Header/>
        <About/>
        <SearchBox/>
        <Watch/>
        <Footer/>
      </div>
    );
}