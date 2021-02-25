import { useState, useEffect, useContext} from 'react';
import {ChallengesContext} from '../contexts/ChallengeContext'

import styles from '../styles/components/countdown.module.css';

let countdownTimeout : NodeJS.Timeout;

export default function Countdown() {

    const {startNewChallenge} = useContext(ChallengesContext);

    const [time, setTime ] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    const [minutesLeft, minutesRight] = String(minutes).padStart(2,'0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2,'0').split('');

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.05*60)
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() =>{
                setTime(time-1)
            },1000)
        }else if(isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])


    return (
        <>
            <div className={styles.countdownContainer}>
            <div>
                <span>{minutesLeft}</span>
                <span>{minutesRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondsLeft}</span>
                <span>{secondsRight}</span>
            </div>
            </div>

            {
                hasFinished === false ?(
                    <button 
                        type="button"
                        className = {
                            isActive ? `${styles.countdownButton} +
                            ${styles.countdownButtonActive}`:
                            styles.countdownButton
                        }
                        onClick={isActive ? resetCountdown: startCountdown}
                    >
                        {isActive?'Abandonar ciclo': 'Iniciar um ciclo'}
                    </button>
                ):
                    <button 
                        type="button"
                        className = {styles.countdownButton}
                        disabled
                     >
                        Ciclo encerrado
                    </button>
            }

            
        </>
    )
}
