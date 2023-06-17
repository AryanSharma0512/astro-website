import React from 'react';

const HomePage = () => {

  return (
    <>
      <div className="home min-h-screen min-w-screen">
        <div className="homeText bottom-20 text-6xl debris">
          It all started at 3:08 AM
        </div>
      </div>
      <div className="affiliations text-3xl story pt-32 px-44">
        2 years ago, on a random night, looking out of our very own little blue planet, I [founder] thought that, what if while on my way to Mars, I got hit by an asteroid.
      </div>
      <div className="affiliations text-3xl story pt-16 px-44">
        On the very next day, I did some research about the spacescraft's mechanism by which it deflects its path from the obstacles. <br/>
        ~ OK So it must be, "Error Proof"! I thought!!!
      </div>
      <div className="affiliations text-3xl story pt-16 px-44">
        In the upcoming months I read a news about how a satellite worth millions failed by a nail sized object that was travelling at about 17,500 mph. I was like, it must be a "natural thing" but it turned out to be an artificially created problem.
      </div>
      <div className='debris text-center text-white py-20 text-5xl'>
        "SPACE DEBRIS"
      </div>
      <div className="affiliations text-3xl story px-44">
        What is Space Debris? <br/>
      </div>
      <div className="flex flex-row affiliations text-3xl story px-44">
        <div className="pr-5">
          ={'>'}
        </div>
        If explained to a 9 year old: It is the junk that was serving us as a satellite or something but, not working currently and is additional to the orbit, disturbing our current projects.
      </div>
      <div className="affiliations text-3xl story pt-16 px-44">
        Thus, We here at Orbital Optimize are researching about the ways to manage the same.
      </div>
      <p className="affiliations text-3xl story pt-32 px-44 text-end">
        <div className="pr-96">
          "For Future: <br />
        </div>
        <div className="pl-32">
          We wish you a happy space flight &nbsp; &nbsp;{':)'}"
        </div>
      </p>
    </>
  );
}

export default HomePage;
