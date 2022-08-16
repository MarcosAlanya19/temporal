import Home from '../views/home';
import About from '../views/about';
import Courses from '../views/courses';
import Contact from '../views/contact';

let content=document.querySelector<HTMLElement>('#root')!;
if (!content) throw new Error('content is not found');

export const router=(route:any)=>{
content.innerHTML = ' ';

  switch(route){
    case "":{
      return content.appendChild(Home());
    }
    case "#":{
      return content.appendChild(Home());
    }
    case '#about':
      return content.appendChild(About());
    case '#courses':
      return content.appendChild(Courses());
    case '#contact':
      return content.appendChild(Contact());
    default:
      return console.log('404!!!');
  }
}