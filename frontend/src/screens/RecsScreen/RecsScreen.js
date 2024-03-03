import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './RecsScreen.module.css';

import { Header } from '../../components/Header/Header';
import { InfoCard } from '../../components/InfoCard/InfoCard';
import { Carousel } from '../../components/Carousel/Carousel';
import { get_recs } from '../../services/RecService';

export function RecsScreen() {

    const location = useLocation();
    const { current } = location.state;

    const [recs, setRecs] = useState([]);

    useEffect(() => {
        const fetchRecs = async (id) => {
            const data = await get_recs(id);
            setRecs(data);
        }

        fetchRecs(current.id - 1);
    }, []);

    return (
        <div className={styles.main_container}>
            <Header />
            <div className={styles.content_container}>
                <InfoCard song={current} />
                <InfoCard song={current} />
                {/* <Carousel songs={recs}/> */}
            </div>
        </div>
    )
}   