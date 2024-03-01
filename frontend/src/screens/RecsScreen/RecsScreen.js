import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './RecsScreen.module.css';

import { Header } from '../../components/Header/Header';
import { InfoCard } from '../../components/InfoCard/InfoCard';
import { Carousel } from '../../components/Carousel/Carousel';

export function RecsScreen() {

    const location = useLocation();
    const { current } = location.state;

    return (
        <div className={styles.main_container}>
            <Header />
            <div className={styles.content_container}>
                {/* <InfoCard song={current} />
                <InfoCard song={current} /> */}
                <Carousel />
            </div>
        </div>
    )
}   