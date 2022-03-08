import './App.css'; 
 
import ReactDOM from 'react-dom';
 import logo from './assets/Group 4056.svg';
 import sortBtn from './assets/Layer 2.svg'
 import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
 function Footer() {
  return (
  
    <Container fluid className=" pt-lg-4 px-lg-5  container_footer">
    <div className="row mx-3 footer_paddings" >
      <div className="col-lg-3 log0_text">
      <svg className='  d-flex mb-lg-4' xmlns="http://www.w3.org/2000/svg" width="112" height="73.293" viewBox="0 0 112 73.293">
  <g id="Group_4056" data-name="Group 4056" transform="translate(-42.4 -50)">
    <text id="ZAIN" transform="translate(43.4 99)" fill="#fff" stroke="#fff" strokeWidth="1" fontSize="48" fontFamily="Cosmetic-Thin, Cosmetic" fontWeight="200"><tspan x="0" y="0">ZAIN</tspan></text>
    <text id="INTERIORS" transform="translate(43.58 119.293)" fill="#fff" stroke="#fff" strokeWidth="1" fontSize="10" fontFamily="Cosmetic-Thin, Cosmetic" fontWeight="200" letterSpacing="0.68em"><tspan x="0" y="0">INTERIORS</tspan></text>
  </g>
</svg>
        <p className=" logo_bottom_p text-start d-none d-md-block">Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.</p>
      </div>
      <hr className='d-md-none bg-white'></hr>
      <div className="col-lg-5  d-none d-md-block">
      </div>
      <div className="col-lg-2 col-6 pt-lg-4 text-start footer_menu">
        <h4 className="text_footer">
          Products
        </h4>
        <ul>
          <li><a href=''>About us</a> </li>
          <li><a href=''>Portfolio</a> </li>
          <li><a href=''>Blog</a> </li>
        </ul>
      </div>
      {/* <hr className='d-md-none bg-white'></hr> */}
      <div class="col-lg-2 col-4 pt-lg-4 text-start footer_menu">
        <h4 class="text_footer">Contact</h4>
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





      
      {/* <footer id="footer" >
  <div className="container text-left text-md-center">
    <div className="row">
      <div className="col-md-8 mx-auto shfooter">
		         <ul className="list-unstyled footer_contact">
                        <li className="mb-5">
                            <a href="/" ></a>
                        </li>

                        <li>
                            <a href="mailto:info@ignitedubai.com" className="email d-flex"> <span></span> info@ignitedubai.com </a>
                        </li>
                        <li className="mt-4">
                            <a href="tel:+971 54 332 2033" className="email d-flex"> <span></span> +971 54 332 2033</a>
                        </li>
					  <li className="mt-4">   
                    <a href="https://wa.me/+971501003310" className="email d-flex">
						<span className="whatsapp_icon  mr-3">
						</span> +971 50 100 3310</a>
                        </li>

                    </ul>
      </div>
		<hr className="clearfix w-100 d-md-none mb-0"/>
      <div className="col-md-2 mx-auto shfooter">
        <h5 className="my-2 mt-4 font-weight-bold d-none d-md-block ">Information</h5>
        <div className="d-md-none title" data-target="#Product" data-toggle="collapse">
          <div className="mt-3 font-weight-bold mobile_view">Information
            <div className="float-right navbar-toggler">
              <i className="fas fa-angle-down text-dark"></i>
              <i className="fas fa-angle-up text-dark"></i>
            </div>
          </div>
        </div>
        <ul className="list-unstyled collapse text-left  mobile_view " id="Product">
          <li className="mt-4">
              <a href="/" target="_self">Home</a>
          </li>
          <li className="mt-2">
              <a href="/#gallery" target="_self">Gallery</a>
          </li>
          <li className="mt-2">
              <a href="/#events" target="_self">Events</a>
          </li>
          <li className="mt-2">
              <a href="/about" target="_self">About Us</a>
          </li>
          <li className="mt-2">
              <a href="/#services" target="_self">Services</a>
          </li>
          <li className="mt-2">
              <a href="/contact" target="_self">Contact us</a>
          </li>
			
      </ul>
      </div>
      <hr className="clearfix w-100 d-sm-none mb-0"/>

      <div className="col-md-2 mx-auto shfooter follow">
        <h5 className="my-2 font-weight-bold d-none d-md-block ml-5 ">Follow</h5>
        <div className="d-md-none title" data-target="#Resources" data-toggle="collapse">
          <div className="mt-3 font-weight-bold mobile_view">Follow
            <div className="float-right navbar-toggler">
              <i className="fas fa-angle-down text-dark"></i>
              <i className="fas fa-angle-up text-dark"></i>
            </div>
          </div>
        </div>
        <ul className="list-unstyled   social_icon mobile_view  collapse ml-5 " id="Resources">
       <div className="d-flex">
			   <li className="mt-3 px-1">
              <a href="https://www.facebook.com/igniteeventsdubai/"  target="_blank"></a>
          </li>
          <li className="mt-3 px-3">
              <a href="https://instagram.com/igniteevents.dubai?utm_medium=copy_link" className="" target="_blank"></a>
          </li>
          <li className="mt-3 px-2">
              <a href="#!" target="_blank"></a>
          </li> 
			</div>                       
      </ul>
      </div>
      <hr className="clearfix w-100 d-md-none mb-0" />
  
    </div>
  </div>
  <div className=" text-center">
     <div className="footer-copyright text-center py-2 mt-2 ">© Copyright  @Ignite Events LLC || Design & Developed by
      <a href="#"> Moosh Digital
</a>
  </div>
 
  </div>
</footer> */}
  </Container>


     
     
   
  );
}

export default Footer;

if (document.getElementById('Footer')) {
    ReactDOM.render(<Footer />, document.getElementById('Footer'));
}
