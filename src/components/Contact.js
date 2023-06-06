import React from 'react';
// import people from './TeamMembers';

const Contact = () => {
  return (
    <div className="min-h-screen min-w-screen text-white">
      <div className=" contact flex items-center justify-center pt-56 text-white text-4xl">
        <h1>Reach us at</h1>
      </div>
      <div className="flex flex-col space-around mx-96 space-y-10 mt-24">
        <div className="card w-72 glass text-white order-1">
          <div className="card-body">
            <p className="card-title text-left">E-mail</p>
            <p className="text-center text-lg">sample@gmail.com</p>
          </div>
        </div>
        <div className="card w-72 glass text-white order-2 ml-auto">
          <div className="card-body">
            <p className="text-xl font-semibold text-right">Phone</p>
            <p className="text-center text-lg">+91-000-0000-000</p>
          </div>
        </div>
      </div>
      <div className="location">
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40509.053484798635!2d165.94453488330254!3d-50.61195941509392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9b37960d3cdddd7%3A0xbd1bca4ab10f2187!2sDisappointment%20Island!5e0!3m2!1sen!2sin!4v1686037175476!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  )
}

export default Contact;