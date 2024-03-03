import React from 'react';
import styles from './InfoCard.module.css';

export function InfoCard({ song }) {

    const convertDate = (date) => {
        const options = { year: 'numeric', month: 'short' };
        return new Date(date).toLocaleDateString(undefined, options);
    }
    
    return (
        <div className={ styles.card_container }>
            <div className={styles.anime_name}> {song.anime.name} </div>
            <div className={styles.anime_container}>
                <img src={song.anime.image_url} alt={song.anime.name} className={styles.anime_image} />
                <div className={styles.anime_info}>
                    <div><span style={{ fontWeight: 700}}>Type:</span> {song.anime.type}</div>
                    <div><span style={{ fontWeight: 700}}>Rating:</span> {song.anime.rating}</div>
                    <div><span style={{ fontWeight: 700}}>Aired:</span> {convertDate(song.anime.from_date)} to {convertDate(song.anime.to_date)}</div>
                    <div><span style={{ fontWeight: 700}}>Genres:</span> {song.anime.genres}</div>
                    <div><span style={{ fontWeight: 700}}>Themes:</span> {song.anime.themes}</div>
                    <div><span style={{ fontWeight: 700}}>Studios:</span> {song.anime.studios}</div>
                </div>
            </div>
        </div>
    )
}
