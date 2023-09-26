import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8591937306155!2d-74.22429489999999!3d40.721116099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3acce0cccdac9%3A0x621d828648f563c8!2s1108%20Grove%20St%2C%20Irvington%2C%20NJ%2007111%2C%20USA!5e0!3m2!1sen!2sng!4v1695722848999!5m2!1sen!2sng"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
