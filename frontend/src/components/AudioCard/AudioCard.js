import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./AudioCard.module.css";

import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";

export function AudioCard({ song }) {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef();
    const progressRef = useRef();
    const animationRef = useRef();

    const handleProgress = () => {
        audioRef.current.currentTime = progressRef.current.value;
    }

    const onLoadedMetadata = () => {
        progressRef.current.max = audioRef.current.duration;
    }

    const repeat = useCallback(() => {
        progressRef.current.value = audioRef.current.currentTime;
        progressRef.current.style.setProperty(
            '--range-progress',
            `${(progressRef.current.value / audioRef.current.duration) * 100}%`
          );
        
        animationRef.current = requestAnimationFrame(repeat);
    }, [audioRef, progressRef])

    useEffect(() => {
        const audio = audioRef.current;
        audio.addEventListener('ended', () => {
            setIsPlaying(false);
        });

        animationRef.current = requestAnimationFrame(repeat);
        if(isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
            // cancelAnimationFrame(animationRef.current);
        }
        // animationRef.current = requestAnimationFrame(repeat);

        return () => {
            audio.removeEventListener('ended', () => {
                setIsPlaying(false);
            });
            cancelAnimationFrame(animationRef.current);
        }
    }, [isPlaying, audioRef, repeat]);

    return (
        <div className={styles.card_container}>
            <div className={styles.song_info}>
                <div className={styles.song_subinfo}>
                    <div className={styles.song_name}>{song.name}</div>
                    <div className={styles.song_artist}>
                        { song.artist === "" ? "Unknown Artist" : song.artist }
                    </div>
                </div>
                <div className={styles.song_type}>{song.type}</div>
                
            </div>
            <div className={styles.controls}>
                <div className={styles.play_button} onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <FaRegCirclePause size="35px" /> : <FaRegCirclePlay size="35px"/>}
                </div>
                <div className={styles.progress_bar}>
                    <input ref={progressRef} type="range" defaultValue={0} onChange={handleProgress}/>
                </div>

                <audio 
                    ref={audioRef} 
                    src={`https://storage.googleapis.com/anime-audio/${song.filename}`}
                    onLoadedMetadata={onLoadedMetadata}
                />
            </div>
            
            
        </div>
    )
}