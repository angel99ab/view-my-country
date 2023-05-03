import { Route } from 'react-router-dom';
import { Routes } from 'react-router';

import Home from './screens/Home/Home';
import AllCountries from './screens/AllCountries/AllCountries';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/countries" element={<AllCountries />}></Route>
    </Routes>
  );
}

export default App;
