import React from 'react';
import Temperature from './Temperature';
import Humidity from './Humidity';
import Light from './Light';

function MainInfo() {
  return (
    <div className="main">
      <div className="textoGrande">Como está la plantita?</div>
      <Temperature />
      <Humidity />
      <Light />
    </div>
  );
}

export default MainInfo;
