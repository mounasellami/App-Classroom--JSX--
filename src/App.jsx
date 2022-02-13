import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import SearchBox from './Components/SearchBox/SearchBox';
import Watch from './Components/Watch/Watch';
import Footer from './Components/Footer/Footer';
import PartyEmoji from './res/PartyEmoji.png';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
 
  const isWeekend=([0,6].indexOf(new Date().getDay()) !== -1); ;// 6 = Saturday, 0 = Sunday
  // const isWeekend=true;
  // const isWeekend=false;

  if (isWeekend) {
    return( 
     <div className="App-section">
        <Header/>
        <About/>
        <h3 style={{color:'red', textAlign:'center'}}> 
          Enjoy is a weekend <img style={{height:"7%", width:"3%"}} src={PartyEmoji} alt='Party Emoji'/> Keep remember your question to monday.
        </h3> 
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