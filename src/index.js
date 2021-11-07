import _ from 'lodash';
import './style.css';
// import printMe from './print.js'
import Icon from './icon.png';


//import Icon from './icon.png'; //importing pictures
function home(){
  const content= document.createElement('div'); content.id='home'; content.classList.add("content");
  const title = document.createElement('p'); title.classList=('title'); content.appendChild(title);
  title.textContent="Le Home Restaurante";
  return content;
}

function menu(){
  const content= document.createElement('div'); content.id='menu'; content.classList.add("content");
  const title = document.createElement('p'); title.classList=('title'); content.appendChild(title);
  title.textContent="Le Menu";
  return content;
  
}

function about(){
  const content= document.createElement('div'); content.id='about'; content.classList.add("content");
  const title = document.createElement('p'); title.classList=('title'); content.appendChild(title);
  title.textContent="About";
  return content;

}



function component() {
//add Image
//  const myIcon = new Image();
//  myIcon.src = Icon; 
//  element.appendChild(myIcon);
  const element = document.createElement('div');
  const topRow = document.createElement('div'); topRow.id=('topRow'); element.appendChild(topRow);
  const mainBody =document.createElement('div'); mainBody.id=('mainBody'); element.appendChild(mainBody);
  const bottomRow= document.createElement('div');bottomRow.id=('bottomRow'); element.appendChild(bottomRow);

  const homeBtn = document.createElement('button'); homeBtn.id=('homeBtn'); topRow.appendChild(homeBtn);
  const menuBtn = document.createElement('button'); menuBtn.id=('menuBtn'); topRow.appendChild(menuBtn);
  const aboutBtn = document.createElement('button'); aboutBtn.id=('aboutBtn'); topRow.appendChild(aboutBtn);

  homeBtn.textContent="Home";
  menuBtn.textContent="Menu";
  aboutBtn.textContent="About";

  const contentBox= document.createElement('div');contentBox.id=('contentBox'); mainBody.appendChild(contentBox);

  //sets current content on screen
  let currentContent=contentBox.appendChild(home());
  

  //deletes current content and adds the one according to button pressed
  homeBtn.addEventListener('click',()=>{
    contentBox.removeChild(currentContent);
    currentContent=contentBox.appendChild(home());
  });
  menuBtn.addEventListener('click',()=>{
    contentBox.removeChild(currentContent);
    currentContent=contentBox.appendChild(menu());
  });
  aboutBtn.addEventListener('click',()=>{
    contentBox.removeChild(currentContent);
    currentContent=contentBox.appendChild(about());
  });
  return element;
}

 document.body.appendChild(component());