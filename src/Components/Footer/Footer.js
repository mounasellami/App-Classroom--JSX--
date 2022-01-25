import React from 'react';
import './Footer.css';

const Footer=() => {
   let firstName ='Slim';
   let lastName ='Amdouni';
   return(
      <footer>
         Copyright &copy; {new Date().getFullYear()} Classroom with {firstName} {lastName}
      </footer>
   )
};

export default Footer;