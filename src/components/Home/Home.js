import React from "react";
import headerImg1 from "../../images/hero-img1.jpeg";
import headerImg2 from "../../images/hero-img2.jpeg";
import blueCircle from '../../images/blue-circle.png';
import yellowCircle from '../../images/yellow-circle.png';
import dots from '../../images/dots.png';
import "./Home.css";

const Home = () => {
  return (
    <div className="header">
      <div className="d-flex gap-5 container">
        <div>
          <h6>DEVELOPED BY TO TEACHERS</h6>
            <h1>
              Experience a learning 
              platform that take you  
              next level
            </h1>
          <p className="py-3 pe-5">
            World-class training and development programs developed by top teachers
          </p>
          <button>Explore all courses</button>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-3 gap-xl-5 position-relative">
          <img src={headerImg1} alt="" />
          <img src={headerImg2} alt="" />
          <img className="blue-circle" src={blueCircle} alt="" />
          <img className="yellow-circle" src={yellowCircle} alt="" />
          <img className="dots" src={dots} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
