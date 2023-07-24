import React from 'react';
import LoginForm from './components/LoginForm';
import MainInfo from './components/MainInfo';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  if (!isLoggedIn) {
    return <LoginForm onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="caja">
      <div className="container">
        <SidebarLeft />
        <MainInfo />
        <SidebarRight />
      </div>
    </div>
  );
}

export default App;
