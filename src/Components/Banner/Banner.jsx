import React from 'react';
import './Banner.scss';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from './../img/slide1.jpg';
import Slide2 from './../img/slide2.jpg';
import Slide3 from './../img/slide3.jpg';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Link } from 'react-scroll'
// 

const Banner = () => {


 
  return (
    <>
      <div className="banner">
        <div className="main_banner">
            <div className="banner_list">
                <h3>React Eco-mmerce</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iusto eaque voluptatum at?  </p>
            </div>

            <div className="banner_img">
            <Carousel indicators={false} controls={false} interval={2000} fade={true}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Slide1}
              alt="First slide"
              style={{width:'100%', height:'auto', objectFit:'cover', borderRadius:'8px'}}
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Slide2}
              alt="Second slide"
              style={{width:'100%', height:'auto' , objectFit:'cover', borderRadius:'8px'}}
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Slide3}
              alt="Third slide"
              style={{width:'100%', height:'auto' , objectFit:'cover', borderRadius:'8px'}}
            />
          </Carousel.Item>
    </Carousel>
            </div>
        </div>
      </div>

      <div className="up">
      <Link  to="banner" spy={true} smooth={true} offset={0} duration={500}><ArrowUpwardIcon style={{color:'white', backgroundColor:'#192a56', fontSize:'3.5rem', borderRadius:'10px', cursor:'pointer'}}/></Link>.
      </div>

    </>
  );
};

export default Banner;
