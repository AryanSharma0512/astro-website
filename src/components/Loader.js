import React from 'react';
import rocket from '../images/rocket.png';

const Loader = () => {
  return (
    <div className="loader">
      {/* <iframe src="https://gifer.com/embed/2QrM" height="50%" className="loader-img"></iframe> */}
      <img src={rocket} width={150} className="loader-img" alt="" />
    </div>
  )
}

export default Loader
