import React from 'react';
import "./Sell.scss";
import Navbar from '../Navbar/Navbar';

const SellProduct = () => {
  return (
    <>
    <Navbar/>
      <div className="sell_product">
        <div className="sell_product_details">
          
          <h3>Sell Your Product</h3>

          <input type="text" placeholder='Product Name' />
          <input type="text" placeholder='Price' />
          <input type="number" placeholder='Quantity' />
          <input type="file" accept='image/*' />
          <textarea style={{width:'100%', padding:'10px', outline:'none'}} placeholder='Products Details' id="" cols="30" rows="10"></textarea>
          <button style={{width:'100%', border:'none', outline:'none', backgroundColor:'#192a56', color:'white',padding:'10px',fontSize:'1rem',marginTop:'10px'}}>Upload</button>
          </div>
      </div>
    </>
  );
};

export default SellProduct;
