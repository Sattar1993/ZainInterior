import React from 'react'

import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import img8 from './assets/AdobeStock_283739874.webp';
import Card from 'react-bootstrap/Card'
function BlogDetail(){
  return (
  
    <div className='container-fluid '>
            <div className='justify-content-start d-flex p-4 mx-4 back_btn'>
            <a href="/" className='btn'> <svg xmlns="http://www.w3.org/2000/svg" width="17.753" height="17.753" viewBox="0 0 17.753 17.753">
        <path id="Icon_ionic-md-arrow-back" data-name="Icon ionic-md-arrow-back" d="M23.73,13.744H10.249L16.462,7.53,14.853,5.977,5.977,14.853l8.877,8.877,1.553-1.553-6.158-6.214H23.73Z" transform="translate(-5.977 -5.977)"/>
        </svg> &#160;&#160;&#160; Back
        </a>
        </div>
        <div className='container-fluid my-3 blog_detail'>
        <div className='row mx-5'>
            <div className='col-lg-7'>
                <div className='blog_detail_heading justify-content-start mb-5'>
                    <h1>How the design works</h1>
                </div>
           
                <div className='blog_img'>
            <img src= {img8} alt=''   className='Blog_img img-fluid'/>
            </div>
            <div className='detail_p my-4'>
                    <p className=' my-4'>
                    We at Zain Interiors always put the clients need and satisfaction first. So in order to start the process we arrange a consultation to understand the client’s project and their requirements. Once this has been done, one of our highly skilled designers will then start to being the creative process by creating concepts based on different mood boards such as colour schemes, fitted furniture, flooring, and finishes. This is all inspired by the client with our designer adding their own personal touch.
                    </p>
                    <p  className=' my-4'>
                    We at Zain Interiors always put the clients need and satisfaction first. So in order to start the process we arrange a consultation to understand the client’s project and their requirements. Once this has been done, one of our highly skilled designers will then start to being the creative process by creating concepts based on different mood boards such as colour schemes, fitted furniture, flooring, and finishes. This is all inspired by the client with our designer adding their own personal touch.
                    </p>
                    <p  className=' my-4'>
                    Once the client is happy with our final concept and has a budget has been agreed we will then move onto producing detailed technical drawings/measurements of all the interior elements. These plans include everything from furniture, lighting, finishes to flooring. These plans will be shown to the client to approve and sign off. We then work with our suppliers and contractors to ensure our clients are given the highest quality products and craftsmanship. We manage all of our projects from concept to completion to ensure we are able to deliver the highest levels of customer satisfaction. That is how we believe all bespoke and luxurious houses are built.
                    </p>
                    <p  className=' my-4'>
                    We at Zain Interiors always put the clients need and satisfaction first. So in order to start the process we arrange a consultation to understandthe client’s project and their requirements. Once this has been done, one of our highly skilled designers will then start to being the creative process by creating concepts based on different mood boards such as colour schemes, fitted furniture, flooring, and finishes. This is allinspired by the client with our designer adding their own personal touch.
                    </p>
                </div>
                <div className='social_icons mt-5'>
                    <div className='row pt-lg-5'>
                    <div className='col-lg-1'>
                    <div className='justify-content-start d-flex '>
            <a href="/" className='btn'> <svg xmlns="http://www.w3.org/2000/svg" width="16.875" height="21.934" viewBox="0 0 16.875 21.934">
  <path id="Icon_awesome-pinterest-p" data-name="Icon awesome-pinterest-p" d="M8.965.457C4.456.457,0,3.463,0,8.328c0,3.094,1.74,4.852,2.795,4.852.435,0,.686-1.213.686-1.556,0-.409-1.041-1.279-1.041-2.979a5.939,5.939,0,0,1,6.17-6.038c2.993,0,5.207,1.7,5.207,4.825,0,2.333-.936,6.71-3.968,6.71a1.951,1.951,0,0,1-2.03-1.925c0-1.661,1.16-3.27,1.16-4.983,0-2.909-4.126-2.382-4.126,1.134A5.163,5.163,0,0,0,5.273,10.6c-.606,2.61-1.846,6.5-1.846,9.189,0,.831.119,1.648.2,2.479.149.167.075.149.3.066C6.144,19.3,6.064,18.7,7.066,14.735a3.564,3.564,0,0,0,3.045,1.582c4.667,0,6.763-4.548,6.763-8.648C16.875,3.3,13.1.457,8.965.457Z" transform="translate(0 -0.457)"/>
</svg>

        </a>
        </div>
                         </div>
                    <div className='col-lg-1'>
                    <div className='justify-content-start d-flex '>
            <a href="/" className='btn'> <svg xmlns="http://www.w3.org/2000/svg" width="16.875" height="21.934" viewBox="0 0 16.875 21.934">
  <path id="Icon_awesome-pinterest-p" data-name="Icon awesome-pinterest-p" d="M8.965.457C4.456.457,0,3.463,0,8.328c0,3.094,1.74,4.852,2.795,4.852.435,0,.686-1.213.686-1.556,0-.409-1.041-1.279-1.041-2.979a5.939,5.939,0,0,1,6.17-6.038c2.993,0,5.207,1.7,5.207,4.825,0,2.333-.936,6.71-3.968,6.71a1.951,1.951,0,0,1-2.03-1.925c0-1.661,1.16-3.27,1.16-4.983,0-2.909-4.126-2.382-4.126,1.134A5.163,5.163,0,0,0,5.273,10.6c-.606,2.61-1.846,6.5-1.846,9.189,0,.831.119,1.648.2,2.479.149.167.075.149.3.066C6.144,19.3,6.064,18.7,7.066,14.735a3.564,3.564,0,0,0,3.045,1.582c4.667,0,6.763-4.548,6.763-8.648C16.875,3.3,13.1.457,8.965.457Z" transform="translate(0 -0.457)"/>
</svg>
 
        </a>
        </div>
                         </div>
                   
                    <div className='col-lg-7'> </div>
                    <div className='col-lg-1'>
                    <div className='justify-content-start d-flex '>
            <a href="/" className='btn'> <svg xmlns="http://www.w3.org/2000/svg" width="11.747" height="21.933" viewBox="0 0 11.747 21.933">
  <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f" d="M12.587,12.338,13.2,8.368H9.387V5.792a1.985,1.985,0,0,1,2.238-2.144h1.732V.268A21.116,21.116,0,0,0,10.283,0C7.146,0,5.1,1.9,5.1,5.343V8.368H1.609v3.969H5.1v9.6H9.387v-9.6Z" transform="translate(-1.609)"/>
</svg>
        </a>
        </div>
                         </div>
                    <div className='col-lg-1'>
                    <div className='justify-content-start d-flex '>
            <a href="/" className='btn'> <svg xmlns="http://www.w3.org/2000/svg" width="21.938" height="21.933" viewBox="0 0 21.938 21.933">
  <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M10.966,7.581A5.623,5.623,0,1,0,16.59,13.2,5.615,5.615,0,0,0,10.966,7.581Zm0,9.279A3.656,3.656,0,1,1,14.622,13.2a3.663,3.663,0,0,1-3.656,3.656Zm7.165-9.509A1.312,1.312,0,1,1,16.82,6.039,1.309,1.309,0,0,1,18.131,7.351Zm3.724,1.331a6.491,6.491,0,0,0-1.772-4.6,6.534,6.534,0,0,0-4.6-1.772c-1.811-.1-7.239-.1-9.049,0a6.524,6.524,0,0,0-4.6,1.767,6.512,6.512,0,0,0-1.772,4.6c-.1,1.811-.1,7.239,0,9.049a6.491,6.491,0,0,0,1.772,4.6,6.542,6.542,0,0,0,4.6,1.772c1.811.1,7.239.1,9.049,0a6.491,6.491,0,0,0,4.6-1.772,6.534,6.534,0,0,0,1.772-4.6c.1-1.811.1-7.234,0-9.044ZM19.516,19.67a3.7,3.7,0,0,1-2.085,2.085c-1.444.573-4.87.44-6.465.44s-5.026.127-6.465-.44A3.7,3.7,0,0,1,2.416,19.67c-.573-1.444-.44-4.87-.44-6.465s-.127-5.026.44-6.465A3.7,3.7,0,0,1,4.5,4.654c1.444-.573,4.87-.44,6.465-.44s5.026-.127,6.465.44a3.7,3.7,0,0,1,2.085,2.085c.573,1.444.44,4.87.44,6.465S20.089,18.231,19.516,19.67Z" transform="translate(0.005 -2.238)"/>
</svg>

        </a>
        </div>
                         </div>
                    <div className='col-lg-1'>
                    <div className='justify-content-start d-flex '>
            <a href="/" className='btn'> <svg xmlns="http://www.w3.org/2000/svg" width="16.875" height="21.934" viewBox="0 0 16.875 21.934">
  <path id="Icon_awesome-pinterest-p" data-name="Icon awesome-pinterest-p" d="M8.965.457C4.456.457,0,3.463,0,8.328c0,3.094,1.74,4.852,2.795,4.852.435,0,.686-1.213.686-1.556,0-.409-1.041-1.279-1.041-2.979a5.939,5.939,0,0,1,6.17-6.038c2.993,0,5.207,1.7,5.207,4.825,0,2.333-.936,6.71-3.968,6.71a1.951,1.951,0,0,1-2.03-1.925c0-1.661,1.16-3.27,1.16-4.983,0-2.909-4.126-2.382-4.126,1.134A5.163,5.163,0,0,0,5.273,10.6c-.606,2.61-1.846,6.5-1.846,9.189,0,.831.119,1.648.2,2.479.149.167.075.149.3.066C6.144,19.3,6.064,18.7,7.066,14.735a3.564,3.564,0,0,0,3.045,1.582c4.667,0,6.763-4.548,6.763-8.648C16.875,3.3,13.1.457,8.965.457Z" transform="translate(0 -0.457)"/>
</svg>
 
        </a>
        </div>
                         </div>
                </div>

                <hr />
                </div>
            </div>
            <div className='col-lg-2'></div>
            <div className='col-lg-3'>
         
          <div className='row my-3'>          
          <div className='col-lg-12'>
          <Card className='card'>
  <Card.Img variant="top" src= {img8} alt=''   className='Blog_img img-fluid' />
  <Card.Body>
  <div className='blog_content_date '>
              <p>7-January-2022</p>
          </div>
    <Card.Title className='content_gallery_title'>How the design works
</Card.Title>
    <Card.Text className='card_text'>
    Zain Interiors is a Luxury Interior Design company based in West London providing
    </Card.Text>
  </Card.Body>
  <div className='blog_content_btn '>
              <a href='#'>READ MORE</a>
          </div>
</Card>
          </div>
      </div>
          <div className='row  my-3'>          
          <div className='col-lg-12'>
          <Card className='card'>
  <Card.Img variant="top" src= {img8} alt=''   className='Blog_img img-fluid' />
  <Card.Body>
  <div className='blog_content_date '>
              <p>7-January-2022</p>
          </div>
    <Card.Title className='content_gallery_title'>How the design works
</Card.Title>
    <Card.Text className='card_text'>
    Zain Interiors is a Luxury Interior Design company based in West London providing
    </Card.Text>
  </Card.Body>
  <div className='blog_content_btn '>
              <a href='#'>READ MORE</a>
          </div>
</Card>
          </div>
      </div>
          <div className='row  my-3'>          
          <div className='col-lg-12'>
          <Card className='card'>
  <Card.Img variant="top" src= {img8} alt=''   className='Blog_img img-fluid' />
  <Card.Body>
  <div className='blog_content_date '>
              <p>7-January-2022</p>
          </div>
    <Card.Title className='content_gallery_title'>How the design works
</Card.Title>
    <Card.Text className='card_text'>
    Zain Interiors is a Luxury Interior Design company based in West London providing
    </Card.Text>
  </Card.Body>
  <div className='blog_content_btn '>
              <a href='#'>READ MORE</a>
          </div>
</Card>
          </div>
      </div>
          <div className='row '>          
          <div className='col-lg-12'>
          <Card className='card'>
  <Card.Img variant="top" src= {img8} alt=''   className='Blog_img img-fluid' />
  <Card.Body>
  <div className='blog_content_date '>
              <p>7-January-2022</p>
          </div>
    <Card.Title className='content_gallery_title'>How the design works
</Card.Title>
    <Card.Text className='card_text'>
    Zain Interiors is a Luxury Interior Design company based in West London providing
    </Card.Text>
  </Card.Body>
  <div className='blog_content_btn '>
              <a href='#'>READ MORE</a>
          </div>
</Card>
          </div>
      </div>
          
            </div>
        </div>
    </div>
    </div>
  
 
  )
}
export default BlogDetail;
if (document.getElementById('BlogDetail')) {
    ReactDOM.render(<BlogDetail />, document.getElementById('BlogDetail'));
}
