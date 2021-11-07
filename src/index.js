import _ from 'lodash';
import './style.css';
import printMe from './print.js'
import Icon from './icon.png';


//import Icon from './icon.png'; //importing pictures

 function component() {
   const element = document.createElement('div');
   const btn = document.createElement('button');


  
  // Lodash, now imported by this script
   element.innerHTML = _.join(['Helo', 'webpack'], ' ');
   element.classList.add('hello');


   //add Image
   const myIcon = new Image();
   myIcon.src = Icon; 
   element.appendChild(myIcon);
   
   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;
   element.appendChild(btn);



   return element;
 }
 document.body.appendChild(component());