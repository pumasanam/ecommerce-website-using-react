import React from 'react';
import './Advertisement.scss';
import Fadvertisement from './../img/laptop.png';
import Sadvertisement from './../img/phone.png';


const Advertisement = () => {

  return (
    <>
      <div className="advertisement">
        <div className="firstAdvertisement">
            <div className="firstAdvertisement_img">
                <img src={Fadvertisement} alt="" />
            </div>
           <div className="firstAdvertisement_list">
                <h4>Top Performance</h4>
                <p>Porto has high performance base, all structure are focusing on performance as main point. Porto speed optimization is super fast compared to other templates.</p>
           </div>
        </div>


        <div className="second_advertisement">
          <div className="secondadvertisementlist">
                <h4>Works Perfectly on Any Device!</h4>
                <p>We believe you will face lots of traffic from mobile device users not only from desktop or laptop users. Porto is the best solution for you, works fine on any screen resolutions and mobile devices. Try Porto and see how it works!</p>
          </div>

          <div className="secondadvertisementimg">
            <img src={Sadvertisement} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertisement;
