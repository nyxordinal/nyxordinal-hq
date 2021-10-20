import React from 'react';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Hero from '../components/sections/Hero';

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
    </>
  );
};

export default Home;
