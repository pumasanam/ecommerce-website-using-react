import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Advertisement from '../Advertisement/Advertisement';
import Info from '../NumbersInfo/Info';
import ImageSliders from '../ImageSliders/ImageSliders';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Info/>
      <Products/>
      <Advertisement/>
      <ImageSliders/>
    </>
  );
};

export default Home;
