
import { useContext } from 'react';
import { CountdownContext, CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/components/countdown.module.css';


export default function Countdown() {


    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext);

    const [minutesLeft, minutesRight] = String(minutes).padStart(2,'0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2,'0').split('');

   


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
