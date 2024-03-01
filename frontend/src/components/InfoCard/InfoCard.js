import React from 'react';
import styles from './InfoCard.module.css';

// export function InfoCard({ song }) {
//     return (
//         <div className={ styles.card_container }>
//             <div className={styles.anime_name}> {song.anime.name} </div>
//             <div className={styles.anime_container}>
//                 <img src={song.anime.image_url} alt={song.anime.name} className={styles.anime_image} />
//             </div>
//         </div>
//     )
// }

export function InfoCard() {
    return (
        <div className={ styles.card_container }>
            <div> ANIME NAME </div>
        </div>
    )
}
