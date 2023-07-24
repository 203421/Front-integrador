import React from 'react';

function Temperature() {
  const [temperature, setTemperature] = React.useState('##');

  React.useEffect(() => {
    // make a request to fetch the temperature and update the state
  }, []);

  return (
    <div className="infoTemperatura">
      <h1>Temperatura</h1>
      <div className="titulos">Bien</div>
      <div className="subtitulos">{temperature}°C</div>
    </div>
  );
}

export default Temperature;
