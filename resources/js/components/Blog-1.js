import React from 'react'
 
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import img8 from './assets/AdobeStock_283739874.webp';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
function Blog() {
  return (

    <div className='container-fluid'>
            <div className='justify-content-start d-flex p-5 mx-4 back_btn'>
            <Link to="/" className='btn'> <svg xmlns="http://www.w3.org/2000/svg" width="17.753" height="17.753" viewBox="0 0 17.753 17.753">
        <path id="Icon_ionic-md-arrow-back" data-name="Icon ionic-md-arrow-back" d="M23.73,13.744H10.249L16.462,7.53,14.853,5.977,5.977,14.853l8.877,8.877,1.553-1.553-6.158-6.214H23.73Z" transform="translate(-5.977 -5.977)"/>
        </svg> &#160;&#160;&#160; Back
        </Link>
        </div>

    <div className='container my-5'>
        <div className='row'>
            <div className='col-lg-12'>
                <div className='blog_heading text-center mb-5'>
                    <h1>Blogs</h1>
                </div>
            </div>
        </div>
    </div>
    <div className='row mx-5' style={{marginBottom:'150px'}}>
        <div className='col-lg-6'>
            <div className='blog_img'>
            <img src= {img8} alt=''   className='Blog_img img-fluid'/>
            </div>
        </div>
        <div className='col-lg-6 justify-content-start'>
          <div className='about_blog_working text-align-left px-lg-5'>
          <div className='blog_content_date '>
                <p>7-January-2022</p>
            </div>
            <div className='blog_content_heading mt-4'>
                <h1>How the design works</h1>
            </div>
            <div className='blog_content_para mt-3'>
                <p>
                Zain Interiors is a Luxury Interior Design company based in West London
                providing residential clients with both bespoke interior design and joinery
                services. Our designers work with clients to ensure they achieve timeless
                elegance in their residential projects...…..
                </p>
            </div>
            <div className='blog_content_btn mt-4'>
                <a href='#'>READ MORE </a>
            </div>
          </div>
        </div>
    </div>
    <div className='content_gallery mx-lg-5 my-5' style={{marginTop:'200px'}}>
        <div className='row mx-lg-1'>

            <div className='col-lg-4'>
            <Card className='card'>
    <Card.Img variant="top" src= {img8} alt=''   className='Blog_img img-fluid' />
    <Card.Body>
    <div className='blog_content_date '>
                <p>7-January-2022</p>
            </div>
      <Card.Title className='content_gallery_title'>How the design works
</Card.Title>
      <Card.Text className='card_text'>
      Zain Interiors is a Luxury Interior Design company
based in West London providing residential clients with
both bespoke interior design and joinery services. Our
      </Card.Text>
    </Card.Body>
    <div className='blog_content_btn mt-2'>
                <a href='#'>READ MORE</a>
            </div>
  </Card>
            </div>
            <div className='col-lg-4'>
            <Card className='card'>
    <Card.Img variant="top" src= {img8} alt=''   className='Blog_img img-fluid' />
    <Card.Body>
    <div className='blog_content_date '>
                <p>7-January-2022</p>
            </div>
      <Card.Title className='content_gallery_title'>How the design works
</Card.Title>
      <Card.Text className='card_text'>
      Zain Interiors is a Luxury Interior Design company
based in West London providing residential clients with
both bespoke interior design and joinery services. Our
      </Card.Text>
    </Card.Body>
    <div className='blog_content_btn mt-2'>
                <a href='#'>READ MORE</a>
            </div>
  </Card>
            </div>
            <div className='col-lg-4'>
            <Card className='card'>
    <Card.Img variant="top" src= {img8} alt=''   className='Blog_img img-fluid' />
    <Card.Body>
    <div className='blog_content_date '>
                <p>7-January-2022</p>
            </div>
      <Card.Title className='content_gallery_title'>How the design works
</Card.Title>
      <Card.Text className='card_text'>
      Zain Interiors is a Luxury Interior Design company
based in West London providing residential clients with
both bespoke interior design and joinery services. Our
      </Card.Text>
    </Card.Body>
    <div className='blog_content_btn mt-2'>
                <a href='#'>READ MORE</a>
            </div>
  </Card>
            </div>



        </div>
        <div className='row mx-lg-1 my-lg-5 gallery_sec_2'>

            <div className='col-lg-4'>
            <Card className='card'>
    <Card.Img variant="top" src= {img8} alt=''   className='Blog_img img-fluid' />
    <Card.Body>
    <div className='blog_content_date '>
                <p>7-January-2022</p>
            </div>
      <Card.Title className='content_gallery_title'>How the design works
</Card.Title>
      <Card.Text className='card_text'>
      Zain Interiors is a Luxury Interior Design company
based in West London providing residential clients with
both bespoke interior design and joinery services. Our
      </Card.Text>
    </Card.Body>
    <div className='blog_content_btn mt-2'>
                <a href='#'>READ MORE</a>
            </div>
  </Card>
            </div>
            <div className='col-lg-4'>
            <Card className='card'>
    <Card.Img variant="top" src= {img8} alt=''   className='Blog_img img-fluid' />
    <Card.Body>
    <div className='blog_content_date '>
                <p>7-January-2022</p>
            </div>
      <Card.Title className='content_gallery_title'>How the design works
</Card.Title>
      <Card.Text className='card_text'>
      Zain Interiors is a Luxury Interior Design company
based in West London providing residential clients with
both bespoke interior design and joinery services. Our
      </Card.Text>
    </Card.Body>
    <div className='blog_content_btn mt-2'>
                <a href='#'>READ MORE</a>
            </div>
  </Card>
            </div>
            <div className='col-lg-4'>
            <Card className='card'>
    <Card.Img variant="top" src= {img8} alt=''   className='Blog_img img-fluid' />
    <Card.Body>
    <div className='blog_content_date '>
                <p>7-January-2022</p>
            </div>
      <Card.Title className='content_gallery_title'>How the design works
</Card.Title>
      <Card.Text className='card_text'>
      Zain Interiors is a Luxury Interior Design company
based in West London providing residential clients with
both bespoke interior design and joinery services. Our
      </Card.Text>
    </Card.Body>
    <div className='blog_content_btn mt-2'>
                <a href='#'>READ MORE</a>
            </div>
  </Card>
            </div>



        </div>
    </div>
    </div>


  );
}

export default Blog;
if (document.getElementById('Blog')) {
    ReactDOM.render(<Blog />, document.getElementById('Blog'));
}
