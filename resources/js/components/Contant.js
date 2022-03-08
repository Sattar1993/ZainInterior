import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
function Contant() {
return (
    <div className="hero_header mt-3  ">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5">
          <div className="header_heading p-lg-5 ebrima">
            <h1 className=" p-lg-2  ">  Beauty Is   Appreciated   Everywhere</h1>
           
          </div>
          <div className='read_more_btn pl-lg-3'>
          <a href='' className=" btn-transprent px-5 py-2  text-white">Read more</a>
            <svg xmlns="http://www.w3.org/2000/svg" className=' tele_svg m-3' width="19.005" height="19.028" viewBox="0 0 19.005 19.028">
  <path id="Icon_zocial-call" data-name="Icon zocial-call" d="M3.305,6.484a1.326,1.326,0,0,1,.338-.72l2.7-2.7q.315-.27.473.09L9,7.249a.589.589,0,0,1-.113.7l-.99.99a1.12,1.12,0,0,0-.315.7,3.436,3.436,0,0,0,.7,1.733,14.8,14.8,0,0,0,1.373,1.8l.7.72c.21.21.48.469.811.777a13.589,13.589,0,0,0,1.631,1.215,3.651,3.651,0,0,0,1.789.754.98.98,0,0,0,.72-.293l1.171-1.17a.5.5,0,0,1,.675-.09l3.94,2.318a.329.329,0,0,1,.18.236.287.287,0,0,1-.09.259l-2.7,2.7a1.323,1.323,0,0,1-.72.337,5.445,5.445,0,0,1-2.488-.3A11.256,11.256,0,0,1,12.7,19.4q-1.182-.765-2.195-1.552T8.889,16.5L8.3,15.937q-.225-.225-.6-.619t-1.3-1.552a22.606,22.606,0,0,1-1.6-2.262,13.2,13.2,0,0,1-1.17-2.51A5.339,5.339,0,0,1,3.305,6.484Z" transform="translate(-2.767 -2.446)" fill="none" stroke="#fafafa" strokeWidth="1"/>
</svg>

             <label  className='Avenir m-2' >Call :+4474 7200 0546</label> 
            </div>
          <div>
          </div>
        </div>
        <div className='col-lg-7 '></div>
      </div>
    </div>
    </div>
   
    
     
     
   
  );
}
export default Contant;

if (document.getElementById('contant')) {
    ReactDOM.render(<Contant />, document.getElementById('contant'));
}
