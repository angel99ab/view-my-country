import { Route } from 'react-router-dom';
import { Routes } from 'react-router';

import Home from './screens/Home/Home';
import Countries from './screens/Countries/Countries';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/countries" element={<Countries />}></Route>
    </Routes>
  );
}

export default App;
