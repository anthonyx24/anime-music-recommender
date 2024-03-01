import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export function Header() {

    const navigate = useNavigate();

    return (
        <div className={styles.header_container}>
            <div className={styles.title} onClick={() => navigate('/')}>
                ANI<span style={{color: "#FEC7F9"}}>MELODI</span>
            </div>
            <div className={styles.learn_more} onClick={() => navigate('/about')}>
                learn more
            </div>
        </div>
    )
}
