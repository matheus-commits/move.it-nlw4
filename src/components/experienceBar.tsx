import React from 'react';
import styles from  '../styles/components/experience-bar.module.css';

export default function ExperienceBar () {

    return(
        <header className={styles.experienceBar}>
            <span>0xp</span>
            <div>
             <span className={styles.currentExp} style={{left:"50%"}}> 
                    300xp
                </span>
                <div style={{width:"50%"}}/>
                
            </div>
            <span>600xp</span>
        </header>
    );
}