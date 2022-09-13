import React from 'react';
import './ImageSliders.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Images1 from './../img/f5.jpg';
import Images2 from './../img/f6.jpg';
import Images3 from './../img/f7.jpg';
import Images4 from './../img/f8.jpg';
import Images5 from './../img/n1.jpg';
import Images6 from './../img/n2.jpg';
import Images7 from './../img/n3.jpg';
import Images8 from './../img/n4.jpg';
import Images9 from './../img/n5.jpg';
import Images10 from './../img/n6.jpg';
import Images11 from './../img/n7.jpg';
import Images12 from './../img/n8.jpg';

const ImageSliders = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
    <div className="image_sliders_carousel">
        <h3 style={{textAlign:'center', marginBottom:'25px'}}>Featuring Product</h3>
        <Carousel responsive={responsive} className="image_carousel" >
                   
                <div className='imgslide'><img  src={Images1} style={{width:'95%' ,cursor:'pointer'}} alt="" /></div>
                <div className='imgslide'><img  src={Images2} style={{width:'95%' ,cursor:'pointer'}} alt="" /></div>
                <div className='imgslide'><img  src={Images3} style={{width:'95%' ,cursor:'pointer'}} alt="" /></div>
                <div className='imgslide'><img  src={Images4} style={{width:'95%' ,cursor:'pointer'}} alt="" /></div>
                <div className='imgslide'><img  src={Images5} style={{width:'95%' ,cursor:'pointer'}} alt="" /></div>
                <div className='imgslide'><img  src={Images6} style={{width:'95%' ,cursor:'pointer'}} alt="" /></div>
                <div className='imgslide'><img  src={Images7} style={{width:'95%' ,cursor:'pointer'}} alt="" /></div>
                <div className='imgslide'><img  src={Images8} style={{width:'95%' ,cursor:'pointer'}} alt="" /></div>
                <div className='imgslide'><img  src={Images9} style={{width:'95%' ,cursor:'pointer'}} alt="" /></div>
                <div className='imgslide'><img  src={Images10} style={{width:'95%' ,cursor:'pointer'}} alt="" /></div>
                <div className='imgslide'><img  src={Images11} style={{width:'95%' ,cursor:'pointer'}} alt="" /></div>
                <div className='imgslide'><img  src={Images12} style={{width:'95%' ,cursor:'pointer'}} alt="" /></div>
            
        </Carousel>
    </div>
  
    </>
  );
};

export default ImageSliders;
