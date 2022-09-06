import React from 'react';
import Navbar from './components/Navbar';
import Routes from './Routes';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes />
    </div>
  );
};

export default App;
