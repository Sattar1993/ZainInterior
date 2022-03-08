 import React from 'react';
import ReactDOM from 'react-dom';
import callLogo from './assets/calllogo.png' 
 import 'bootstrap/dist/css/bootstrap.min.css';
 function About() {
  return (
    
   <div className="container-fluid mt-lg-5">
        <div className="row">
        <div className="col-lg-2 ">
        </div>
        <div className="col-lg-8  ">
        <div className=" p-lg-2 about_container ">
        <div className=" inner_div ">
        <h1 className='ebrimaBold d-flex pb-3'   >About Us</h1>
        <p className=" Avenir  pt-10 d-flex text-start">Zain Interiors is a Luxury Interior Design company based in West London providing residential clients with both bespoke interior design and joinery services. Our designers work with clients to ensure they achieve timeless elegance in their residential projects. We work with the clients to make sure their designs meet all their needs and we then go that extra mile by providing them with bespoke joinery services as well as high skilled craftsmanship for the installation.</p>
        <div className='about_read_more text-start pt-5'>
          <a href='' className='px-5 py-2' > Learn More</a>
          </div>
          </div>
          </div>
       
    </div>
   
        </div>
      </div>
   
    
     
     
   
  );
}

export default About;
if (document.getElementById('About')) {
    ReactDOM.render(<About />, document.getElementById('About'));
}