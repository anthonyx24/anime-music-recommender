import React, { useState, useEffect } from "react";
import styles from "./SearchScreen.module.css";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { get_results } from "../../services/SearchService";
import { Fade } from "react-awesome-reveal";

import { SongCard } from "../../components/SongCard/SongCard";
import { Carousel } from "../../components/Carousel/Carousel";

export function SearchScreen() {

    const [searchResults, setSearchResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
        }
    };

    const navigate = useNavigate();

    const fetchResults = async (search_query) => {
        const data = await get_results(search_query);
        setSearchResults(data);
    }

    useEffect(() => {
        if(searchInput.trim() !== '') {
            fetchResults(searchInput);
        } else {
            setSearchResults([]);
        }
    }, [searchInput]);

    return (
        <motion.div 
            className={styles.main_container}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 }}}
            variants={containerVariants}
        >
            <div className={styles.header_container}>
                <div className={styles.title} onClick={() => navigate('/')}>
                    ANI<span style={{color: "#FEC7F9"}}>MELODI</span>
                </div>
                <div className={styles.learn_more} onClick={() => navigate('/about')}>
                    learn more
                </div>
                
            </div>
            <input 
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className={styles.search_input}
                    placeholder="search for song, artist, or anime" 
            />
            <div className={styles.search_results}>
                {searchResults.map((result) => (
                <Fade cascade duration={500}>
                    <SongCard key={result.id} song={result}/>
                </Fade>
                ))}
            </div>

            {/* <div className={styles.search_container}>
                <input 
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className={styles.search_input}
                    placeholder="search for song, artist, or anime" 
                />
                <div className={styles.search_results_container}>
                    <div className={styles.search_results}>
                        {searchResults.map((result) => (
                            <Fade cascade duration={500}>
                                <SongCard key={result.id} song={result}/>
                            </Fade>
                        ))}
                    </div>
                </div>
            </div> */}

            
        </motion.div>

        
    );
}

