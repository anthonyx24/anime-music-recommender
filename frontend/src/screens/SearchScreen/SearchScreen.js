import React from "react";
import styles from "./SearchScreen.module.css";

export function SearchScreen() {
    return (
        <div className={styles.main_container}>
            Search Screen
        </div>

            /* <div className={styles.search_container}>
        {showOverlay && (
            <div className={styles.overlay} onClick={handleOverlayClick} />
        )}

        <motion.input 
            type="text"
            className={styles.search_input}
            placeholder="search for song, artist, or anime" 
            onFocus={() => setIsActive(true)}
            variants={search_bar_variants}
            initial="initial"
            animate={isActive ? "active" : "initial"}
            onAnimationComplete={() => setIsAnimationComplete(true)}
            disabled={!isAnimationComplete} // Disable input until the animation completes
        />
    </div> */
    );
}

