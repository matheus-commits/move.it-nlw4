import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/profile.module.css';



export default function Profile() {

    
    const {level} = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src =" https://github.com/matheus-commits.png" alt="Matheus Souza"/>
            <div>
                <strong>Matheus Souza</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}
