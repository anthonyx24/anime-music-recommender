import './App.css';
import { useRoutes, useLocation } from 'react-router-dom';
import * as React from 'react';
import { AnimatePresence } from 'framer-motion';

import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { SearchScreen } from './screens/SearchScreen/SearchScreen';
import { AboutScreen } from './screens/AboutScreen/AboutScreen';

function App() {

  const element = useRoutes([
    { 
      path: '/', 
      element: <HomeScreen /> 
    },
    {
      path: '/search',
      element: <SearchScreen />
    },
    {
      path: '/about',
      element: <AboutScreen />
    }
  ])

  const location = useLocation();

  if(!element) return null;

  return (
    <div className="App-background">
      <AnimatePresence mode="wait">
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </div>
  );
}

export default App;
