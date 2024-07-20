import React from 'react';
import './AboutUs.css';
import teaImage1 from '../Assets/Tea1.png'; // Update the path accordingly
import teaImage2 from '../Assets/Tea2.png';

const AboutUs = () => {
  return (
    <div className="about-us" id="about-us">
      <div className="about-us-content">
        <div className="about-us-text">
          <h2>WHY GREEN TEA?</h2>
          <h1>The Health Benefits of Green</h1>
          <p>
            Green Tea is renowned for its numerous health benefits, including boosting metabolism, enhancing brain function, and promoting heart health. Rich in antioxidants, it helps combat free radicals, reducing the risk of chronic diseases and certain cancers. Regular consumption can also aid in weight management, improve dental health, regulate blood sugar levels, and promote healthier skin. Incorporating green tea into your daily routine can lead to a longer, healthier life, making it a perfect addition to your wellness regimen.
          </p>
        </div>
        <div className="about-us-image">
          <img src={teaImage1} alt="Green Tea" className='teaImage1'/>
        </div>
      </div>
      
      <div className="about-us-content">
      <div className="about-us-image">
          <img src={teaImage2} alt="Green Leaf" className='teaImage2' />
        </div>
        <div className="about-us-text">
          <h2>ABOUT US</h2>
          <h1>Green Leaf Team</h1>
          <p>
            At GreenLeaf Tea, we are dedicated to providing the finest organic green tea, sourced sustainably from lush tea estates. Our mission is to promote wellness through natural, high-quality tea that offers numerous health benefits, including boosting metabolism and enhancing brain function. Committed to ethical practices and environmental care, we invite you to join us in enjoying the pure, refreshing taste of GreenLeaf Tea.
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default AboutUs;
