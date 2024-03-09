import React from 'react';
import styles from './SongCard.module.css';

export function SongCard({ song, onClick }) {

    return (
        <div className={styles.card_container} onClick={onClick}>
            <img loading="lazy" src={song.anime.image_url} alt={song.name} className={styles.song_image} />
            <div className={styles.song_info}>
                <div className={styles.song_name}>{song.name}</div>
                <div className={styles.anime_info}>{song.anime.name} - {song.type} </div>
            </div>
            
        </div>
    );
}