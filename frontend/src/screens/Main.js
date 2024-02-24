import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HomeScreen from './HomeScreen/HomeScreen';
import SearchScreen from './SearchScreen/SearchScreen';

const Main = () => {
    const [screen, setScreen] = useState("home");

    const switchScreen = (screen) => {
        setScreen(screen);
    }

    const screens = {
        home: <HomeScreen switchScreen={switchScreen}/>,
        search: <SearchScreen switchScreen={switchScreen}/>,
    };

    const CurrentScreen = screens[screen];

    return (
        <div>
            <HomeScreen switchScreen={switchScreen}/>
          {/* <BackgroundComponent />
          <AnimatePresence mode="wait">
            <motion.div
              key={screen}
              initial="initial"
              animate="in"
              exit="out"
              transition={{ duration: 1 }}
            >
              <CurrentScreen />
            </motion.div>
          </AnimatePresence> */}
        </div>
    );
}

export default Main;