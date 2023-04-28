import { Route } from 'react-router-dom';
import { Routes } from 'react-router';

import Home from './screens/Home/Home';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
