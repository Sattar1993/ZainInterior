import './App.css';

import ReactDOM from 'react-dom';
 import logo from './assets/Group 4054.png';
 import { Link } from 'react-router-dom';
 import sortBtn from './assets/Layer 2.svg'
 import 'bootstrap/dist/css/bootstrap.min.css';


 function App() {
  return (

      <div className="container-fluid position-relative">
      <div className="row mt-1 justify-content-start  ">
      <div className="col d-flex justify-content-start" style={{paddingLeft:"5%"}}>

      <svg   xmlns="http://www.w3.org/2000/svg" width="100" height="62.5" viewBox="0 0 100 62.5">
  <g id="Group_4055" data-name="Group 4055" transform="translate(-42.4 -50)">
    <text id="ZAIN" transform="translate(43.4 94)" fill="#473f92" stroke="#473f92" strokeWidth="1" fontSize="43" fontFamily="Cosmetic-Thin, Cosmetic" fontWeight="200"><tspan x="0" y="0">ZAIN</tspan></text>
    <text id="INTERIORS" transform="translate(43.4 108.5)" fill="#473f92" stroke="#473f92" strokeWidth="1" fontSize="10" fontFamily="Cosmetic-Thin, Cosmetic" fontWeight="200" letterSpacing="0.55em"><tspan x="0" y="0">INTERIORS</tspan></text>
  </g>
</svg>


      </div>
           <div className="container-fluid d-flex justify-content-end col  " style={{paddingRight:"2%"}}>
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded=""
            aria-label="Toggle navigation">
         <a href="/page2"><img src={sortBtn}  className='img-fluid' alt="Responsive image" style={{height:"100%",paddingRight:"2%"}}/></a>
          </button>

        </div>
         </div>


      </div>





  );
}




export default App;

if (document.getElementById('header')) {
    ReactDOM.render(<App />, document.getElementById('header'));
}
