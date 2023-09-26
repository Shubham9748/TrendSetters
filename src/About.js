import React from 'react';
import HeroSection from './components/HeroSection';
import { AppContext, useProductContext } from './context/productContext';

const About = () => {
  //const {myName} = useContext(AppContext);
  const {myName} = useProductContext();


  const data = {
    name: "TrendSetters E-commerce",
  };
  return <>
      
      <HeroSection myData={data} />
    </>
};



export default About;