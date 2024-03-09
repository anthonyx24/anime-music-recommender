import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './RecsScreen.module.css';

import { Header } from '../../components/Header/Header';
import { InfoCard } from '../../components/InfoCard/InfoCard';
import { Carousel } from '../../components/Carousel/Carousel';

import { useSong } from '../../contexts/SongContext';


export function RecsScreen() {

    const { currentSong, recs } = useSong();

    // useEffect(() => {
    //     const fetchRecs = async (id) => {
    //         const data = await get_recs(id);
    //         setRecs(data);
    //     }

    //     fetchRecs(current.id - 1); // - 1 to account for index difference between SQL and data
    // }, []);

    return (
        <div className={styles.main_container}>
            <Header />
            <div className={styles.content_container}>
                <InfoCard song={currentSong} />
                {/* <InfoCard song={current} /> */}
                <Carousel songs={recs}/>
            </div>
        </div>
    )
}   