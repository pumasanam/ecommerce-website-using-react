import React, {useState} from 'react';
import './Info.scss';
import CountUp from 'react-countup';

const Info = () => {

      const [test, setTest] = useState(false);

  const Number = ()=>{
    if(window.scrollY>=210){
        setTest(true);
    }

    else{
        setTest(false); 
    }
    }

window.addEventListener('scroll', Number);

window.addEventListener('scroll',()=>{
  let scrolled = window.scrollY;
  console.log(scrolled);
})
  return (
    <>
      <div className="info">
            <div className="info_list">
                {test && <h5><CountUp start={0} suffix="+" end={2000} duration={1}></CountUp></h5>}
                <h6>Project Completed</h6>
            </div>

            <div className="info_list">
                {test && <h5><CountUp start={0} suffix="+" end={6000} duration={1}></CountUp></h5>}
                <h6>Happy Clients</h6>
            </div>

            <div className="info_list">
                {test && <h5><CountUp start={0} suffix="+" end={5000} duration={1}></CountUp></h5>}
                <h6>Cup Of Coffee</h6>
            </div>

            <div className="info_list">
                {test && <h5><CountUp start={0} suffix="+" end={3000} duration={1}></CountUp></h5>}
                <h6>Real Professionals</h6>
            </div>
      </div>
    </>
  );
};

export default Info;
