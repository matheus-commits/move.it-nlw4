import styles from '../styles/components/profile.module.css';

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src =" https://github.com/matheus-commits.png" alt="Matheus Souza"/>
            <div>
                <strong>Matheus Souza</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}
