// import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
// import React from "react";

import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
 
const MyComponent = () => {
 
  const [ value, setValue ] = useState(0); 
 
  return (
    <RangeSlider
      value={value}
      onChange={changeEvent => setValue(changeEvent.target.value)} />
  );
 
};

export default MyComponent;