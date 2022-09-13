import React, {useState, useEffect} from 'react';
import './Product.scss';
import ProductsStorage from './ProductsStorage';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
      const fetch = async()=>{
        try{
            const res = await axios.get('https://fakestoreapi.com/products');
            setProducts(res.data);
        }
        catch(err){
          console.log(err);
        }
      };
      fetch();
    },[]);
  return (
    <>
      <div className="products">
        <h2 style={{marginBottom:'30px'}}>Product Overview</h2>

        <div className="products_list">
            {products.map((list)=>{
              return <ProductsStorage key={list.id} list={list}/>
            })}
        </div>
      </div>
    </>
  );
};

export default Products;
