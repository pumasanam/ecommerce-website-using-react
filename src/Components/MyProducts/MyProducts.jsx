import React, {useState, useEffect} from 'react';
import "./MyProducts.scss";
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

const MyProducts = () => {
    const [myProduct, setMyProduct] = useState([]);

    useEffect(()=>{
        const fetch = async ()=>{
            try{
                const res = await axios.get('https://fakestoreapi.com/products');
                setMyProduct(res.data);
            }
            catch(err){
                console.log(err);
            }
        };
        fetch();
    },[]);
  return (
    <>
    <Navbar/>

        <div className="myProduct">
            <h4>My Products</h4>

            <div className="myProductList">
                {myProduct.map((list)=>{
                    return (
                        <>
                            <div className="primary_myproduct" key={list.id}>
                                <div className="primary_myproduct_img" style={{width:'33%'}}>
                                    <img src={list.image} alt="myProduct_img" style={{width:'90px', height:'90px',objectFit:'cover'}} />
                                </div>

                                <div className="primary_myproduct_list" style={{width:'33%'}}>
                                    <h5>{list.title}</h5>
                                    <h6><strong>Price:</strong> $ {list.price}</h6>
                                </div>

                                <div className="primary_myproduct_buttons" style={{width:'33%', textAlign:'right'}}>
                                    <button className='edit'>Edit</button>
                                    
                                    <button>Delete</button>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>

        </div>
    </>
  );
};

export default MyProducts;
