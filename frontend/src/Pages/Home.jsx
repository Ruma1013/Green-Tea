import React from 'react';
import Hero from '../Components/Hero/Hero';
import AboutUs from '../Components/AboutUS/AboutUs';
import Blog from '../Components/Blog/Blog';
import Products from '../Components/Products/Products';
import Newsletter from '../Components/Newsletter/Newsletter';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="aboutus">
        <AboutUs />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="newsletter">
        <Newsletter />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
