import React from 'react';

import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './assets/12.png';
import img2 from './assets/1.jpg';
import img3 from './assets/4.jpg';
import img4 from './assets/AdobeStock_283739874.webp';
import img5 from './assets/green-interior-modern-interior-living-room-style-with-soft-sofa-green-wall-3d-rendering (2).webp';
import img6 from './assets/interior-design-has-sofa-empty-dark-wall-background-3d-rendering.webp';
import img7 from './assets/3.jpg';


// import Swp from './swiperExample';
function Containt2ndpage() {
    return (
        <div className="App">


            <div >
                <div className='justify-content-start d-flex p-5'>
                     <a href="/"> <svg xmlns="http://www.w3.org/2000/svg" width="17.753" height="17.753" viewBox="0 0 17.753 17.753">
  <path id="Icon_ionic-md-arrow-back" data-name="Icon ionic-md-arrow-back" d="M23.73,13.744H10.249L16.462,7.53,14.853,5.977,5.977,14.853l8.877,8.877,1.553-1.553-6.158-6.214H23.73Z" transform="translate(-5.977 -5.977)"/>
</svg>
</a> 
                </div>
                <h1 className='ebrimaBold'>
                    Bespoke Kitchen
                </h1>
                <div className='Avenir container-fulid   d-flex justify-content-center mt-5 mb-10' style={{ width: "100%", justifyContent: "center", paddingLeft: "20%", paddingRight: "20%" }}>
                    <p className='Avenir' >
                        Our designers are always in touch with all the latest and commercial trends in the interior design industry. We
                        also regularly attend major international exhibitions such as Maison & Object in Paris and Decorex in Germany,
                        making us one of the leaders of contemporary interior design.
                    </p>
                </div>

            </div>
            <div className="container-fluid" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                <div className='row p2row'>
                    <div className='col-lg-6  p-1'>
                        <img src={img1} alt='' className='p2img' />
                        <img src={img2} alt='' className='p2img' />
                        <img src={img3} alt='' className='p2img' />
                        <img src={img4} alt='' className='p2img' />
                    </div>
                    <div className='col-lg-6  p-1 '>
                        <img src={img5} alt='' className='p2img' />
                        <img src={img6} alt='' className='p2img' />
                        <img src={img7} alt='' className='p2img' />
                        <img src={img1} alt='' className='p2img' />
                    </div>

                </div>
        

            </div>
       <div className='container my-5 pb-5' >
       <div className='row w-25 mx-auto'>
       <div className='col-lg-12'>
       <div className='see_morebtn'>
        <a href=''>Show More</a>
        </div>
        </div>
        </div>
         </div>
        </div>

   
    );
}

export default Containt2ndpage

if (document.getElementById('Containt2ndpage')) {
    ReactDOM.render(<Containt2ndpage />, document.getElementById('Containt2ndpage'));
}