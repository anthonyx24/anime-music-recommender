import React, { useState } from 'react'; 
// import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import styles from './HomeScreen.module.css';
import { useNavigate } from 'react-router-dom';
export function HomeScreen() {
    
    const navigate = useNavigate();

    const navigateToSearch = () => {
        navigate('/search');
    }

    // const visible = { opacity: 1, y: 0, transition: { delay: 1, duration: 1 } };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { 
                delay: 0.5,
                when: "beforeChildren",
                staggerChildren: 1, // Stagger the animation of child components
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { 
            opacity: 1, y: 0, 
            transition: { duration: 1 }
        },
    };

    return(
        <motion.div 
            className={styles.main_container} 
            onClick={navigateToSearch}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 }}}
            variants={containerVariants}
        >
            <motion.div className={styles.title_container}>
                <motion.div className={styles.title_text} variants={itemVariants}>
                    ANI<span style={{color: "#FEC7F9"}}>MELODI</span>
                </motion.div>
                <motion.div className={styles.sub_text} variants={itemVariants}>
                    anime song recommender
                </motion.div>
            </motion.div>
            <motion.div className={styles.soft_text} variants={itemVariants}>
                click anywhere to start
            </motion.div>                       
        </motion.div>
    );
}