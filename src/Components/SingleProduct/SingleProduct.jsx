import React, {useState, useEffect} from 'react';
import './SingleProduct.css';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import singleImg1 from './../img/f2.jpg';
import singleImg2 from './../img/f3.jpg';
import singleImg3 from './../img/f4.jpg';

const SingleProduct = ({testTotal}) => {
    const {id} = useParams();
    const [single, setSingle] = useState(null);
    const [p, setP] = useState();
    const [images, setImages] = useState();
    const [images1, setImages1] = useState();
    useEffect(()=>{
      const fetch = async ()=>{
          try{
              const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
              setSingle(res.data);
              setP(res.data.price);
              setImages(res.data.image);
              setImages1(res.data.image)
              
          }
          catch(err){
            console.log(err);
          }
      };
      if(id){
        fetch();
      }
    },[id]);
    // .......................getting each object details


    const [number, setNumber] = useState('0');
    const [total, setTotal] = useState();
    const [disa, setDisable] = useState(false);

  const TotalButton =()=>{
     const TotalPrice = number * p;
      setTotal(`$ ${TotalPrice} /-`);
       setDisable(true);
   }


   const SingleImg1 =()=>{
      setImages(images1)
   }

   const singleimg2 =()=>{
    setImages(singleImg1)
   }

   const singleimg3 =()=>{
    setImages(singleImg2)
   }

   const singleimg4 =()=>{
    setImages(singleImg3)
   }
  // ......................images display dynamically




  const [related, setRelated] = useState([]);

  useEffect(()=>{
    const fetching = async()=>{
        try{
            const response = await axios.get('https://fakestoreapi.com/products');
            console.log(response);
            setRelated(response.data);
        }
        catch(err){
          console.log(err);
        }
    };
    fetching();
  },[]);

    
  return (
    <>
    <Navbar/>
    { single ?
      (
        <div className="singledata">
            <div className="single_img">
                <img src={images} alt="" />

                <div className="single_img_list">
                    <div className="single_imgs" onClick={SingleImg1}>
                        <img src={images1} alt="" />
                    </div>

                    <div className="single_imgs" onClick={singleimg2} >
                        <img src={singleImg1} alt="" />
                    </div>

                    <div className="single_imgs" onClick={singleimg3}>
                        <img src={singleImg2} alt="" />
                    </div>

                    <div className="single_imgs" onClick={singleimg4} >
                        <img src={singleImg3} alt="" />
                    </div>
                </div>
            </div>

            <div className="singledata_list">
                <h4>{single.title}</h4>
                <h5>Price: $ {single.price}/-</h5>
                <span style={{display:'block',lineHeight:'7px', marginTop:'20px'}}>Quantity</span>
               
                <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}  />
                <br />

                <button onClick={TotalButton} className="btn btn-success">Add To Cart</button>
                <br />

                {disa?<input  type="text"  value={total} onChange={(e)=>{setTotal(e.target.value)}} placeholder='Total'/>:<input disabled  type="text" value={total} onChange={(e)=>{setTotal(e.target.value)}} placeholder='Total'/>}
                <br />

                <button className='btn btn-success px-4'>Buy Now</button>

                <div className="single_Details" style={{marginTop:'15px'}}>
                  <h6 style={{margin:'0px'}}>Product Details</h6>
                  <p>{single.description}</p>
                </div>
            </div>
        </div>
      ):
      (
        <p>loading...</p>
      )
    }

    <div className="relatedP">
        <h3 style={{textAlign:'center', marginBottom:'1rem'}}>Related Products</h3>
      <div className="relatedp_img">
        {related.map((item)=>{
          return(
            <>
                  <div key={item.id} className="r_img" style={{border:'1px solid lightgray'}}>
                    <img src={item.image} alt="" />
                      <div className="rproduct_details" style={{padding:'0.8rem'}}>
                        <h5>{item.title}</h5>
                        <h6>${item.price} /-</h6>
                      </div>
                  </div>
            </>
          );
        })}
         

          {/* <div className="r_img" style={{border:'1px solid lightgray'}}>
              <img src="/f2.jpg" alt="" />
              <div className="rproduct_details" style={{padding:'0.8rem'}}>
                <h5>ColorFul T-Shirt</h5>
                <h6>$ 20 /-</h6>
              </div>
          </div>

          <div className="r_img"style={{border:'1px solid lightgray'}}>
              <img src="/f3.jpg" alt="" />
              <div className="rproduct_details" style={{padding:'0.8rem'}}>
                <h5>ColorFul T-Shirt</h5>
                <h6>$ 20 /-</h6>
              </div>
          </div>

          <div className="r_img" style={{border:'1px solid lightgray'}}>
              <img src="/f4.jpg" alt="" />
              <div className="rproduct_details" style={{padding:'0.8rem'}}>
                <h5>ColorFul T-Shirt</h5>
                <h6>$ 20 /-</h6>
              </div>
          </div> */}
        </div>
    </div>

    </>
  );
};

export default SingleProduct;
