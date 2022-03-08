import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import img_about from './assets/08ebacc3a10af634a8716f098d97ea49.webp';
import process_img1 from './assets/08ebacc3a10af634a8716f098d97ea49.webp';
import process_img2 from './assets/08ebacc3a10af634a8716f098d97ea49.webp';
import process_img3 from './assets/08ebacc3a10af634a8716f098d97ea49.webp';
import process_img4 from './assets/08ebacc3a10af634a8716f098d97ea49.webp';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
function AboutUs() {
  return (
    <>
    <div className='container-fluid about_us_content'>
            <div className='justify-content-start d-flex p-5 mx-4 back_btn'>
            <a href="/" className='btn'> <svg xmlns="http://www.w3.org/2000/svg" width="17.753" height="17.753" viewBox="0 0 17.753 17.753">
        <path id="Icon_ionic-md-arrow-back" data-name="Icon ionic-md-arrow-back" d="M23.73,13.744H10.249L16.462,7.53,14.853,5.977,5.977,14.853l8.877,8.877,1.553-1.553-6.158-6.214H23.73Z" transform="translate(-5.977 -5.977)"/>
        </svg> &#160;&#160;&#160; Back
        </a>
        </div>
    <div className='row mx-5' style={{marginBottom:'150px'}}>
    <div className='col-lg-6 justify-content-start'>
          <div className='aboutus_blog_working text-align-left px-lg-5 mb-5'>
      
            <div className='blog_content_heading my-4'>
                <h1>About Us</h1>
            </div>
            <div className='aboutus_blog_content_para mt-3'>
                <p>
                Zain Interiors is a Luxury Interior Design company based in West London providing residential clients with both bespoke interior design and joinery services. Our designers work with clients to ensure they achieve timeless elegance in their residential projects. We work with the clients to make sure their designs meet all their needs and we then go that extra mile by providing them with bespoke joinery services as well as high skilled craftsmanship for the installation.
                </p>
            </div>
            
          </div>
        </div>
        <div className='col-lg-6'>
            <div className='blog_img'>
            <img src= {img_about} alt=''   className='aboutus_img img-fluid'/>
            </div>
        </div>
        
    </div>
    <div className='working_process_section p-5 mx-5'>
    <div className='row'>

    <div className='col-lg-5 d-flex'>
    <div className='column'> 
    <div className='working_process_img'>
            <img src= {process_img1} alt=''   className='process_img1 px-2 py-2'/>
            </div>
            <div className='blog_img'>
            <img src= {process_img2} alt=''   className='process_img2 px-2 py-2 '/>
            </div>
     </div>
    <div className='column'> 
    <div className='blog_img'>
            <img src= {process_img2} alt=''   className='process_img2 px-2 py-2'/>
            </div>
    <div className='working_process_img'>
            <img src= {process_img1} alt=''   className='process_img1  px-2 py-2'/>
            </div>
           
     </div>
    
            </div>
    
    <div className='col-lg-7 '>
    <div className='row mx-5'>
            <div className='col-lg-12'>
                <div className='process_ul_points mb- mx-4'>
                    <h1>How the design works</h1>
                </div>
            <div className='working_process_points my-4'>
                  <ul>
                  <li className=' my-0'>
                    We at Zain Interiors always put the clients need and satisfaction first. So in order to start the process we arrange a consultation to understand the client’s project and their requirements. Once this has been done, one of our highly skilled designers will then start to being the creative process by creating concepts based on different mood boards such as colour schemes, fitted furniture, flooring, and finishes. This is all inspired by the client with our designer adding their own personal touch.
                    </li>
                    <li  className=' my-4'>
                    We at Zain Interiors always put the clients need and satisfaction first. So in order to start the process we arrange a consultation to understand the client’s project and their requirements. Once this has been done, one of our highly skilled designers will then start to being the creative process by creating concepts based on different mood boards such as colour schemes, fitted furniture, flooring, and finishes. This is all inspired by the client with our designer adding their own personal touch.
                    </li>
                    <li className=' my-4'>
                    We at Zain Interiors always put the clients need and satisfaction first. So in order to start the process we arrange a consultation to understand the client’s project and their requirements. Once this has been done, one of our highly skilled designers will then start to being the creative process by creating concepts based on different mood boards such as colour schemes, fitted furniture, flooring, and finishes. This is all inspired by the client with our designer adding their own personal touch.
                    </li>
             
                  </ul>
                </div>               
            </div>           
        </div>
    </div>
    </div>
    </div>
    <div className='contact_form p-5 mx-5'>
    <div className='Contact_form my-4'>
                <h1>Get In Touch</h1>
            </div>
    <div className='row mt-5'>
    <div className='col-lg-6'>
    <Form className='mx-4 py-5'>
    <Form.Text className="text-muted ">
    Leave us a message
    </Form.Text>
  <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
    <Form.Label className="email_heading">Name</Form.Label>
    <Form.Control className="email_text rounded-0" type="text" placeholder="" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="email_heading">Password</Form.Label>
    <Form.Control className="email_text rounded-0"  type="email" placeholder="" />
  </Form.Group>
  <Form.Label className="email_heading mb-4">Write your message here</Form.Label>
  <FloatingLabel controlId="floatingTextarea2" label="">
      
    <Form.Control
      as="textarea"
      className="textarea mt-3 rounded-0"
      placeholder="Leave a comment here"
      style={{ height: '200px' }}
    />
  </FloatingLabel>
  <div className="d-grid gap-4 mt-4">
  <Button variant="" size="lg">
  Send
  </Button>
</div>
</Form>
    </div>
    <div className='col-lg-6 '>
    <div className='contact_address'>
    <div className='location d-flex'>
      <span className='loc_icon mt-1 ' >
      <svg xmlns="http://www.w3.org/2000/svg" width="16.775" height="26.84" viewBox="0 0 16.775 26.84">
  <path id="Icon_metro-location" data-name="Icon metro-location" d="M16.742,1.928a8.387,8.387,0,0,0-8.387,8.387c0,8.387,8.387,18.452,8.387,18.452S25.13,18.7,25.13,10.315a8.387,8.387,0,0,0-8.387-8.387Zm0,13.525a5.137,5.137,0,1,1,5.137-5.137A5.137,5.137,0,0,1,16.742,15.453Zm-3.25-5.137a3.25,3.25,0,1,1,3.25,3.25A3.25,3.25,0,0,1,13.492,10.315Z" transform="translate(-8.355 -1.928)"/>
</svg>

      </span>
      <p className='px-5'>3755 Salem, Corner with Sunny <br/> Boulevard, 3755 Commercial OR 97302</p>
    </div>
    <div className='location d-flex my-3'>
      <span className='loc_icon mt-1 ' >
      <svg xmlns="http://www.w3.org/2000/svg" width="20.247" height="20.262" viewBox="0 0 20.247 20.262">
  <path id="Icon_zocial-call" data-name="Icon zocial-call" d="M.035,3.247a1.218,1.218,0,0,1,.31-.661L2.824.106q.29-.248.434.083l2,3.76a.541.541,0,0,1-.1.641L4.25,5.5a1.028,1.028,0,0,0-.289.641A3.154,3.154,0,0,0,4.6,7.73a13.586,13.586,0,0,0,1.26,1.654l.641.661c.193.193.44.431.744.713a12.474,12.474,0,0,0,1.5,1.116,3.351,3.351,0,0,0,1.643.692.9.9,0,0,0,.661-.269l1.075-1.074a.454.454,0,0,1,.619-.083l3.616,2.128a.3.3,0,0,1,.165.217.264.264,0,0,1-.083.238L13.961,16.2a1.214,1.214,0,0,1-.661.309,5,5,0,0,1-2.284-.279,10.332,10.332,0,0,1-2.355-1.126q-1.085-.7-2.015-1.425T5.16,12.441l-.537-.517q-.206-.206-.548-.568T2.886,9.931A20.751,20.751,0,0,1,1.419,7.854a12.113,12.113,0,0,1-1.074-2.3A4.9,4.9,0,0,1,.035,3.247Z" transform="matrix(0.966, 0.259, -0.259, 0.966, 4.283, 0)"/>
</svg>

      </span>
      <p className='px-5'>(305) 555-4446</p>
    </div>
    <div className='location d-flex my-3'>
      <span className='loc_icon mt-1 ' >
      <svg xmlns="http://www.w3.org/2000/svg" width="16.775" height="16.775" viewBox="0 0 16.775 16.775">
  <path id="Icon_awesome-whatsapp" data-name="Icon awesome-whatsapp" d="M14.263,4.688A8.315,8.315,0,0,0,1.18,14.719L0,19.025l4.407-1.157A8.288,8.288,0,0,0,8.38,18.879h0a8.393,8.393,0,0,0,8.391-8.313A8.346,8.346,0,0,0,14.263,4.688ZM8.384,17.479a6.9,6.9,0,0,1-3.52-.962l-.251-.15L2,17.052l.7-2.55-.165-.262a6.923,6.923,0,1,1,12.84-3.673,6.986,6.986,0,0,1-6.987,6.912ZM12.173,12.3c-.206-.1-1.228-.607-1.419-.674s-.33-.1-.468.1-.535.674-.659.816-.243.157-.449.052a5.654,5.654,0,0,1-2.827-2.471c-.213-.367.213-.341.61-1.135a.385.385,0,0,0-.019-.363c-.052-.1-.468-1.127-.64-1.543s-.341-.348-.468-.356-.258-.007-.4-.007a.769.769,0,0,0-.554.258,2.334,2.334,0,0,0-.726,1.734A4.069,4.069,0,0,0,5,10.87a9.282,9.282,0,0,0,3.55,3.138,4.065,4.065,0,0,0,2.494.52,2.127,2.127,0,0,0,1.4-.989,1.737,1.737,0,0,0,.12-.989C12.518,12.458,12.379,12.405,12.173,12.3Z" transform="translate(0 -2.25)"/>
</svg>


      </span>
      <p className='px-5'>(305) 555-4446</p>
    </div>
    <div className='location d-flex my-3'>
      <span className='loc_icon mt-1 ' >
      <svg xmlns="http://www.w3.org/2000/svg" width="18.632" height="14.677" viewBox="0 0 18.632 14.677">
  <g id="Icon_feather-mail" data-name="Icon feather-mail" transform="translate(1.393 1)">
    <path id="Path_1" data-name="Path 1" d="M4.585,6H17.262a1.589,1.589,0,0,1,1.585,1.585v9.508a1.589,1.589,0,0,1-1.585,1.585H4.585A1.589,1.589,0,0,1,3,17.093V7.585A1.589,1.589,0,0,1,4.585,6Z" transform="translate(-3 -6)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    <path id="Path_2" data-name="Path 2" d="M18.847,9l-7.923,5.546L3,9" transform="translate(-3 -7.415)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
  </g>
</svg>


      </span>
      <p className='px-5'>youremail@gmail.com</p>
    </div>
    <div className='location d-flex my-3'>
      <span className='loc_icon mt-1 ' >
      <svg xmlns="http://www.w3.org/2000/svg" width="21.938" height="21.933" viewBox="0 0 21.938 21.933">
  <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M10.966,7.581A5.623,5.623,0,1,0,16.59,13.2,5.615,5.615,0,0,0,10.966,7.581Zm0,9.279A3.656,3.656,0,1,1,14.622,13.2a3.663,3.663,0,0,1-3.656,3.656Zm7.165-9.509A1.312,1.312,0,1,1,16.82,6.039,1.309,1.309,0,0,1,18.131,7.351Zm3.724,1.331a6.491,6.491,0,0,0-1.772-4.6,6.534,6.534,0,0,0-4.6-1.772c-1.811-.1-7.239-.1-9.049,0a6.524,6.524,0,0,0-4.6,1.767,6.512,6.512,0,0,0-1.772,4.6c-.1,1.811-.1,7.239,0,9.049a6.491,6.491,0,0,0,1.772,4.6,6.542,6.542,0,0,0,4.6,1.772c1.811.1,7.239.1,9.049,0a6.491,6.491,0,0,0,4.6-1.772,6.534,6.534,0,0,0,1.772-4.6c.1-1.811.1-7.234,0-9.044ZM19.516,19.67a3.7,3.7,0,0,1-2.085,2.085c-1.444.573-4.87.44-6.465.44s-5.026.127-6.465-.44A3.7,3.7,0,0,1,2.416,19.67c-.573-1.444-.44-4.87-.44-6.465s-.127-5.026.44-6.465A3.7,3.7,0,0,1,4.5,4.654c1.444-.573,4.87-.44,6.465-.44s5.026-.127,6.465.44a3.7,3.7,0,0,1,2.085,2.085c.573,1.444.44,4.87.44,6.465S20.089,18.231,19.516,19.67Z" transform="translate(0.005 -2.238)"/>
</svg>



      </span>
      <span className='loc_icon mt-1 mx-5' >
      <svg xmlns="http://www.w3.org/2000/svg" width="11.747" height="21.933" viewBox="0 0 11.747 21.933">
  <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f" d="M12.587,12.338,13.2,8.368H9.387V5.792a1.985,1.985,0,0,1,2.238-2.144h1.732V.268A21.116,21.116,0,0,0,10.283,0C7.146,0,5.1,1.9,5.1,5.343V8.368H1.609v3.969H5.1v9.6H9.387v-9.6Z" transform="translate(-1.609)"/>
</svg>



      </span>
      <span className='loc_icon mt-1 ' >
      <svg xmlns="http://www.w3.org/2000/svg" width="16.875" height="21.934" viewBox="0 0 16.875 21.934">
  <path id="Icon_awesome-pinterest-p" data-name="Icon awesome-pinterest-p" d="M8.965.457C4.456.457,0,3.463,0,8.328c0,3.094,1.74,4.852,2.795,4.852.435,0,.686-1.213.686-1.556,0-.409-1.041-1.279-1.041-2.979a5.939,5.939,0,0,1,6.17-6.038c2.993,0,5.207,1.7,5.207,4.825,0,2.333-.936,6.71-3.968,6.71a1.951,1.951,0,0,1-2.03-1.925c0-1.661,1.16-3.27,1.16-4.983,0-2.909-4.126-2.382-4.126,1.134A5.163,5.163,0,0,0,5.273,10.6c-.606,2.61-1.846,6.5-1.846,9.189,0,.831.119,1.648.2,2.479.149.167.075.149.3.066C6.144,19.3,6.064,18.7,7.066,14.735a3.564,3.564,0,0,0,3.045,1.582c4.667,0,6.763-4.548,6.763-8.648C16.875,3.3,13.1.457,8.965.457Z" transform="translate(0 -0.457)"/>
</svg>


      </span>
      
    </div>
    </div>
    </div>
    </div>

    </div>
    </div>
  
    </>
  );
}
export default AboutUs;

if (document.getElementById('AboutUs')) {
    ReactDOM.render(<AboutUs />, document.getElementById('AboutUs'));
}
