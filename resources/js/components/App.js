import './App.css';

import ReactDOM from 'react-dom';
 import logo from './assets/Group 4054.png';
 import { Link } from 'react-router-dom';
 import sortBtn from './assets/Layer 2.svg'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import logoimg from './assets/Group 4055.png';

 function App() {
     console.log("======== Appp component =======")
  return (

      <div className="container-fluid position-relative" >
      <div className="row mt-1 justify-content-start  ">
      <div className="col d-flex justify-content-start" style={{paddingLeft:"5%"}}>

      <div className='top_logo' >
      <a href=''> <img src= {logoimg} alt=''  className=''/></a>
      </div>
      <nav role='navigation' >
          <div id="menuToggle" >
            <input type="checkbox" />
            <span className='span1'></span>
            <span className='span2'></span>
            <span className='span3'></span>
            <ul id="menu">
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Portfolio</li>
              </a>
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
                <li>Contact</li>
              </a>
            </ul>
          </div>
	      </nav>
      </div>

         </div>

      </div>
  );
}




export default App;

if (document.getElementById('header')) {
    ReactDOM.render(<App />, document.getElementById('header'));
}
