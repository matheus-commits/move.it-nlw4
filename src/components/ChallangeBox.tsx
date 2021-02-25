import { useState, useEffect, useContext} from 'react';
import {ChallengesContext} from '../contexts/ChallengeContext'

import styles from '../styles/components/challenge-box.module.css';

export default function ChallengeBox() {

    const {activeChallenge,resetChallenge} = useContext(ChallengesContext);

    return (
        <div className={styles.challengeBoxContainer}>
           {activeChallenge?(
            <div className={styles.challengeActive}>
               <header>{`${activeChallenge.amount}xp`}</header>

               <main>
                    <img src={`icons/${activeChallenge.type}.svg`} />
                    <strong >Novo desafio </strong>
                    <p> {activeChallenge.description} </p>
               </main>
                <footer>
                    <button
                        type="button"
                        className={styles.failButton}
                        onClick={resetChallenge}
                    > 
                        Falhei
                     </button>
                    <button
                        type="button"
                        className={styles.successButton}
                    > 
                        Completei 
                    </button>
                </footer>
            </div>
           ):(
            <div className={styles.challengeNotActive}>
                <strong>
                    Inicie um ciclo para receber desafios a serem completados
                </strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Complete-os e ganhe experiência e avance de level.
                </p>
            </div>
           )}
        </div>
    )   
}
