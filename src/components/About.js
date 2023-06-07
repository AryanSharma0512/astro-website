import React from 'react';
import Timeline from './Timeline';
import team from './../utils/TeamMembers';
import tag from './../images/tag.png';
import name from './../images/name.png';
import tag2 from './../images/tag2.png';
import name2 from './../images/name2.png';

const About = () => {
  return (
    <div className="min-h-screen min-w-screen">
      <div className="h-2/3 pt-64 flex flex-row justify-center">
        <img src={tag} alt="We are P" />
        <img src={name} alt=""/>
      </div>
      <div className="h-2/3 pt-24 flex flex-row justify-center">
        <img src={tag2} alt="We are Orbital Optimize" />
        <img src={name2} alt="Orbital Optimize" className="mx-2"/>
      </div>
      <h2 className="text-center text-white text-6xl my-12 affiliations">Our Team</h2>
      <Timeline nameList={team}/>
    </div>
  )
}

export default About;
