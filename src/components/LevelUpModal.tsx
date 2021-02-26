import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/level-up-modal.module.css';

export default function LevelUpModal(){

    const {level, closeLevelUpModal} = useContext(ChallengesContext);

    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo nível</p>

                <button onClick={closeLevelUpModal} type="button">
                    <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
            </div>
        </div>
    )
}