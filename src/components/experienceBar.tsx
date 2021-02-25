import React, {useContext} from 'react';
import {ChallengesContext} from '../contexts/ChallengeContext';
import styles from  '../styles/components/experience-bar.module.css';

export default function ExperienceBar () {

    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext);

    const percentualToNextLevel = Math.round((currentExperience*100)/experienceToNextLevel);

    return(
        <header className={styles.experienceBar}>
            <span>0xp</span>
            <div>
             <span className={styles.currentExp} style={{left:`${percentualToNextLevel}%`}}> 
                    {currentExperience}xp
                </span>
                <div style={{width:`${percentualToNextLevel}%`}}/>
                
            </div>
            <span>{experienceToNextLevel}xp</span>
        </header>
    );
}