import React from 'react';
import Navbar from './Navbar';
import Routes from './Routes';
import {Link} from 'react-router-dom';
import './styles/App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Routes /> */}
      <Link to="/login">
          <button type="submit">
            Login
          </button>
      </Link>
    </div>
  );
};

export default App;
