// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import View from './components/View';
import Signup from './components/signUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </Router>
  );
};

export default App;
