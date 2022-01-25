import React from 'react';
import './About.css';
import srcAboutFullStack from '../../res/AboutFullStack-src.png';

const About=() => {
    let firstName ='Slim';
    let lastName ='Amdouni';
  return (
        <div style={{border:'solid 1px black', maxWidth:'100vw', margin:'9% 7%', display:'flex', height:579, borderRadius:'3%'}}>
            <div style={{width:'30%', padding:'7% 3%', backgroundColor:'#9beaf9', borderRadius:'3% 0 0 3%'}}>
                <h1 className='title red size'>Join our magic class with {firstName} {lastName}</h1>
                <h4 className='red weight'>Let's dive into web development to build your website or your web application. Let's get started our course.</h4>
            </div>
            <img src={srcAboutFullStack} alt='Pic full stack' style={{width:'70%', borderRadius:'0 3% 3% 0'}}/>
        </div>
   );
};

export default About;
/*   return (
        <header>
          <img className="App-logo" src={logo} alt="logo" />
          <h1 style={{color: "#61dafb", fontSize:70}}>Join our magic class with {firstName} {lastName}</h1>
        </header>
    )
// function NavBar () {   
//     let Header= 
//      <header>
//           <img className="App-logo" src={logo} alt="logo" />
//           <h1 style={{color: "#61dafb", fontSize:70}}>Join our magic class with {firstName} {lastName}</h1>
//      </header>
//     return( <div>{Header}</div> );
//   }
*/