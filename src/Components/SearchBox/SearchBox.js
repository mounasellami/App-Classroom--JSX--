import React from 'react';
import './SearchBox.css'
import srcKnowledgeMakeTheWorldBetterPlace from '../../res/KnowledgeMakeTheWorldBetterPlace-src.png';

function SearchBox() {
   let firstName ='Slim';

   let BoxInput= <input className='Box-Input' type="search" placeholder="Whrite your question !" />;
   let BtnSearch= <button className='btn-Search'> Send it to {firstName} </button>;
   let BoxAnswer= <textarea name="message" value={"The answer of Slim."} readOnly={true} />;
    
   return( 
      <form style={{margin:'0 0 0 3%', display:'flex', flexDirection:'column'}}> 
         <div style={{display:'flex'}}>
            {BoxInput}{BtnSearch}
         </div>
         <div style={{display:'flex'}}>
            {BoxAnswer} 
            <img src={srcKnowledgeMakeTheWorldBetterPlace} 
                 alt='Knowledge Make The World Better Place' 
                 style={{margin:'7% 0 0 41%'}} 
            />
         </div>
      </form>
   );
}

export default SearchBox;

// function SearchBox () { 
//     let BoxInput= <input type="search" placeholder="Whrite your question !" style={{fontSize:37, width:793, border:'transparent',borderRadius:13, marginTop:103 }}/>;
//     let BtnSearch= <button style={{fontSize:37, border:'transparent', background:'#4fa3db', color:'white', borderRadius:13}}> Send it to {firstName} </button>;
//     let BoxAnswer= <textarea name="message" style={{width:1038, height:370, fontSize:37, color:'#757575', marginTop:13, boxShadow:'0 7px 37px #000'}}>The answer of Slim.</textarea>
//     return( <form> {BoxInput}{BtnSearch}<br/>{BoxAnswer} </form> );
//   }