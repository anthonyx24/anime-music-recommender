import React from "react";
import styles from "./AboutScreen.module.css";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

export function AboutScreen() {

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
            About Screen
        </motion.div>
    )
}