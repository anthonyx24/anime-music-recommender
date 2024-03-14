import './App.css';
import { useRoutes, useLocation } from 'react-router-dom';
import * as React from 'react';
import { AnimatePresence } from 'framer-motion';

import { SongProvider } from './contexts/SongContext';

import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { SearchScreen } from './screens/SearchScreen/SearchScreen';
import { AboutScreen } from './screens/AboutScreen/AboutScreen';
// import { RecsScreen } from './screens/RecsScreen/RecsScreen';

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
    },
  ])

  const location = useLocation();

  if(!element) return null;

  return (
    <SongProvider>
      <div className="App-background">
        <AnimatePresence mode="wait">
          {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
      </div>
    </SongProvider>
  );
}

export default App;
