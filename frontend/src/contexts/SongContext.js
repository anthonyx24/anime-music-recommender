import React, { useState, createContext, useContext } from 'react';

const SongContext = createContext();

export function SongProvider({ children }) {
    const [currentSong, setCurrentSong] = useState(null);
    const [recs, setRecs] = useState([]);

    const updateInfo = (song, recs) => {
        setCurrentSong(song);
        setRecs(recs);
    };

    return <SongContext.Provider value={{ currentSong, recs, updateInfo }}>{children}</SongContext.Provider>;
}

export function useSong() {
    return useContext(SongContext);
}