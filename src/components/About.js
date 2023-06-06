import React from 'react';
import Timeline from './Timeline';
import team from './TeamMembers';

const About = () => {
  return (
    <div className="min-h-screen min-w-screen">
      <div className="h-2/3 py-64">

      </div>
      <h2 className="text-center text-white text-6xl my-12 affiliations">Our Team</h2>
      <Timeline nameList={team}/>
    </div>
  )
}

export default About;
