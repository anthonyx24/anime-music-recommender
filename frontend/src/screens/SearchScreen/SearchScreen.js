import React, { useState, useEffect } from "react";
import styles from "./SearchScreen.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { Fade } from "react-awesome-reveal";

import { Header } from "../../components/Header/Header";
import { SongCard } from "../../components/SongCard/SongCard";
import { Carousel } from "../../components/Carousel/Carousel";
import { InfoCard } from "../../components/InfoCard/InfoCard";

import { FaArrowLeft } from "react-icons/fa";

import { get_results } from "../../services/SearchService";
import { get_recs } from "../../services/RecService";

export function SearchScreen() {

    const [searchResults, setSearchResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const [currentSong, setCurrentSong] = useState({});
    const [recs, setRecs] = useState([]);

    const [showRecs, setShowRecs] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
        }
    };

    const fetchResults = async (search_query) => {
        const data = await get_results(search_query);
        setSearchResults(data);
    }

    const fetchRecs = async (id) => {
        const data = await get_recs(id);
        setRecs(data);
    }

    useEffect(() => {
        if(searchInput.trim() !== '') {
            fetchResults(searchInput);
        } else {
            setSearchResults([]);
        }
    }, [searchInput]);

    const handleCardClick = async (song) => {
        await fetchRecs(song.id - 1);
        console.log(recs);
        setCurrentSong(song);
        setShowRecs(true);
    }


    return (
        <motion.div 
            className={styles.main_container}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.5 }}}
            variants={containerVariants}
        >
            <Header />
            <AnimatePresence mode="wait">
                {showRecs ? (
                    <motion.div
                        key="recs"
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, transition: { duration: 0.5 }}}
                        variants={containerVariants}
                    >
                        <div className={styles.back_button} onClick={() => setShowRecs(false)}>
                            <FaArrowLeft />
                            back to search
                        </div>
                        <div className={styles.recs_container}>
                            <InfoCard song={currentSong} />
                            <Carousel songs={recs}/>
                        </div>
                    </motion.div>
                    
                ) : (
                    <motion.div
                        key="search"
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, transition: { duration: 0.5 }}}
                        variants={containerVariants}
                    >
                        <input 
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            className={styles.search_input}
                            placeholder="search for song, artist, or anime" 
                        />
                        <div className={styles.search_results}>
                            {searchResults.map((result) => (
                            <Fade key={result.id} cascade duration={500}>
                                <SongCard song={result} onClick={() => handleCardClick(result)}/>
                            </Fade>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            
        </motion.div>

        
    );
}

