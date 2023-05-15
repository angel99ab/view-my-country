import { Route } from 'react-router-dom';
import { Routes } from 'react-router';

import Home from './screens/Home/Home';
import AllCountries from './screens/AllCountries/AllCountries';
import DetailedCountry from './screens/DetailedCountry/DetailedCountry';
import NotFound from './screens/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/countries' element={<AllCountries />}></Route>
      <Route path='/countries/:country' element={<DetailedCountry />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
