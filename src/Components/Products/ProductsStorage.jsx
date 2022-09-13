import React from 'react';
import {Link} from 'react-router-dom';

const ProductsStorage = ({list}) => {
    
  return (
    <>
    <Link to={`/${list.id}`}>
        <div className="product_storage">
          <img src={list.image} alt="" style={{width:'100%', height:'250px',objectFit:'cover'}} />
            <div className="product_storage_list">
              <h5>{list.title}</h5>
              <h6>$ {list.price}/-</h6>

              <div className="stars">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
              </div>
            </div>
        </div>
      </Link>
    </>
  )
}

export default ProductsStorage;
