import './App.css'; 
 
import ReactDOM from 'react-dom';
 import logo from './assets/Group 4056.svg';
 import sortBtn from './assets/Layer 2.svg'
 import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
 function Footer() {
  return (
    
    <Container fluid className=" pt-lg-4 px-lg-5 container_footer">
    <div className="row mx-3 footer_paddings" >
      <div className="col-lg-3">
      <svg className='  d-flex mb-lg-4' xmlns="http://www.w3.org/2000/svg" width="112" height="73.293" viewBox="0 0 112 73.293">
  <g id="Group_4056" data-name="Group 4056" transform="translate(-42.4 -50)">
    <text id="ZAIN" transform="translate(43.4 99)" fill="#fff" stroke="#fff" strokeWidth="1" fontSize="48" fontFamily="Cosmetic-Thin, Cosmetic" fontWeight="200"><tspan x="0" y="0">ZAIN</tspan></text>
    <text id="INTERIORS" transform="translate(43.58 119.293)" fill="#fff" stroke="#fff" strokeWidth="1" fontSize="10" fontFamily="Cosmetic-Thin, Cosmetic" fontWeight="200" letterSpacing="0.68em"><tspan x="0" y="0">INTERIORS</tspan></text>
  </g>
</svg>
        <p className=" logo_bottom_p text-start mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.</p>
      </div>
      <hr className='d-md-none bg-white'></hr>
      <div className="col-lg-5">
      </div>
      <div className="col-lg-2 pt-lg-4 text-start footer_menu">
        <h4 className="text_footer">
          Products
        </h4>
        <ul>
          <li><a href=''>About us</a> </li>
          <li><a href=''>Portfolio</a> </li>
          <li><a href=''>Blog</a> </li>
        </ul>
      </div>
      <hr className='d-md-none bg-white'></hr>
      <div className="col-lg-2 pt-lg-4 text-start footer_menu">
        <h4 className="text_footer">Contact</h4>
        <ul>
          <li><a href=''>+4474 7200 0546 </a></li>
          <li><a href=''>+9733 9970 12</a></li>
          <li><a href=''>zain@zaininteriors.com</a></li>
        </ul>
      </div>  
      <hr className='d-md-none bg-white'></hr>  
    </div>
    <div className="col-lg-12 p-2 w-lg-50 mx-lg-auto" >
        <p className="text_footer contant_style">Copyright © 2022 Inoterior Demo2 Theme. All rights reserved <br/> Terms & Condition Privacy Policy Sitemap</p>
      </div>
  </Container>

     
     
   
  );
}

export default Footer;

if (document.getElementById('Footer')) {
    ReactDOM.render(<Footer />, document.getElementById('Footer'));
}
