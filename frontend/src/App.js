import './App.css';
import { useRoutes, useLocation } from 'react-router-dom';
import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { SearchScreen } from './screens/SearchScreen/SearchScreen';

function App() {
  // const [screen, setScreen] = useState("home");

  // const switchScreen = (screen) => {
  //   setScreen(screen);
  // }

  // const screens = {
  //   home: <HomeScreen switchScreen={switchScreen}/>,
  //   search: <SearchScreen switchScreen={switchScreen}/>,
  // };

  // const CurrentScreen = screens[screen];

  const element = useRoutes([
    { 
      path: '/', 
      element: <HomeScreen /> 
    },
    {
      path: '/search',
      element: <SearchScreen />
    }
  ])

  const location = useLocation();

  if(!element) return null;

  return (
    // <div className="App-background">
    //   {screen === 'home' && (
    //     <FadeTransition>
    //       <HomeScreen switchScreen={() => switchScreen('search')} />
    //     </FadeTransition>
    //   )}
    //   {screen === 'search' && (
    //     <FadeTransition>
    //       <SearchScreen switchScreen={() => switchScreen('home')} />
    //     </FadeTransition>
    //   )}
    // </div>
    <div className="App-background">
      <AnimatePresence mode="wait">
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </div>
  );
}

export default App;
