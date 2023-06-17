import React from 'react';
import Timeline from './Timeline';
import partners from './../utils/Partners';

const Affiliations = () => {
  return (
    <>
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <div className="text-white w-2/3 mx-32 text-4xl affiliations tracking-wider">
        At Orbital Optimize we have established a robust foundation, which has enabled us to form partnerships with prestigious institutions worldwide. Our primary focus revolves around effectively addressing the challenge of space debris while also fostering a vibrant astro community for enthusiasts. Our motto encapsulates our commitment "They asked, We delivered .... One at a time"
      </div>
    </div>
    <h2 className="text-center text-white text-6xl affiliations mb-12">We have Onboard</h2>
    <Timeline nameList={partners} />
    </>
  )
}

export default Affiliations;
