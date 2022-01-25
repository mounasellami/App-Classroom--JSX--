import React from 'react'
import myVideo from '../../res/myVideo.mp4';

function WatchJSX() {
    return (
        <div style={{textAlign:'center', margin:'13% 0 3% 0'}}>
           <video width="723" height="409" controls> 
               <source src={myVideo} type="video/mp4" style={{marginTop:373}} /> 
           </video>
           {/* <iframe width="723"  height="409" 
                   src={myVideo} 
                   title='Video Modern Java script'
                   frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                   style={{marginTop:273}} >
           </iframe> */}
           <div style={{textAlign:'center', marginTop:'3%'}}> 
               <h3>Learn more about <span>
                      <a className="App-link" href="https://reactjs.org/docs/introducing-jsx.html" target="_blank" rel="noopener noreferrer" >
                         JSX
                      </a>
                   </span>
               </h3>
               <br />
           </div>
        </div>
    );
};

export default WatchJSX;


// function watchJSX () {
//     let watchVideo=<iframe width="723" height="409" src={myVideo} 
//                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
//                            style={{marginTop:73}} >
//                    </iframe>  
//                    {/* <video width="723" height="409" controls> <source src={myVideo} type="video/mp4" /> </video> */}
//     let learnMore=<div> <h3>Learn more about <span>
//           <a className="App-link" href="https://reactjs.org/docs/introducing-jsx.html" target="_blank" rel="noopener noreferrer" >
//             JSX
//           </a>
//         </span>
//        </h3>
//        <br />
//     </div>
//     return( <div>{watchVideo}<br/>{learnMore}</div> )
//   }