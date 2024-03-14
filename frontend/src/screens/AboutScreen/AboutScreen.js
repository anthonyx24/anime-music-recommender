import React from "react";
import styles from "./AboutScreen.module.css";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

import { FaArrowLeft } from "react-icons/fa";
import { Header } from "../../components/Header/Header";

export function AboutScreen() {

    const navigate = useNavigate();
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
        }
    };
    
    return (
        <motion.div 
            className={styles.main_container}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 }}}
            variants={containerVariants}
        >
            {/* <div className={styles.title}> ABOUT ANI<span style={{color: "#FEC7F9"}}>MELODI</span> </div> */}
            <div className={styles.top_section}>
                <div className={styles.back_button} onClick={() => navigate('/search')}>
                    <FaArrowLeft /> back to search
                </div>
                <a className={styles.feedback_link} href="https://forms.gle/kgNSf3w8BuvsDpbP9" target="_blank">GIVE FEEDBACK HERE</a>
            </div>
            <div className={styles.content_container}>
                <div className={styles.section}>
                    <div className={styles.header}> WHAT IS ANIMELODI? </div>
                    <div className={styles.body}>
                        animelodi is a passion project stemming from how i usually discover new anime,
                        which is through their soundtracks! this app was created to  
                        help people like me discover new anime through anime songs they already like.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.header}> WHAT'S NEXT? </div>
                    <div className={styles.body}>
                        i'm going to continuously work on this application, both to improve how the songs are 
                        recommended and to fix and enhance the user experience. i'm still a relatively new
                        developer, and i used this project to learn on the fly, but there's still a lot of cool 
                        things left to learn.

                        <br />
                        <br />

                        some upcoming fixes/features include: removing duplicates, fixing misidentified songs/anime,
                        better search, implementing a new recommendation algorithm
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.header}> WHERE DID YOU GET THE DATA? </div>
                    <div className={styles.body}>
                        the anime song information (including audio) was pulled from the 
                        <a className={styles.link} href="https://api-docs.animethemes.moe/song/" target="_blank"> anime themes api</a>.
                        for the anime information, i used the 
                        <a className={styles.link} href="https://jikan.moe/" target="_blank"> jikan api</a>
                        , which is an unofficial api for myanimelist.
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.header}> HOW ARE THE SONGS RECOMMENDED? </div>
                    <div className={styles.body}>
                        currently i'm using a simple machine-learning algorithm: k nearest neighbors.
                        i first extract a set of audio features for each song, then calculate the 
                        similarity between songs using those features.
                    </div>
                </div>

            </div>           
            
        </motion.div>
    )
}