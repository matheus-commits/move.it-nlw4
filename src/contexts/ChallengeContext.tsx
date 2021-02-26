import {createContext, ReactNode, useEffect, useState} from 'react';
import cookies from 'js-cookie';
import challenges from '../../challenges.json';
import LevelUpModal from '../components/LevelUpModal';


interface ChallengerProviderProps{
    children: ReactNode
    level:number;
    currentExperience:number;
    challengesCompleted:number;
}

interface Challenge{

    type: 'body'|'eye';
    description:string;
    amount:number;
}

interface ChallengesContextData{
    level:number;
    currentExperience:number;
    challengesCompleted:number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
}


export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider({children,...rest}:ChallengerProviderProps){

    const [ level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
    const[isLevelUpModalOpen, setIsLevelOpenModalOpen] = useState(false);
    const [activeChallenge, setActiveChallenge] = useState(null);
    const experienceToNextLevel = Math.pow((level+1) * 4, 2);


    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {

        cookies.set('level',String(level));
        cookies.set('challengesCompleted',String(challengesCompleted));
        cookies.set('currentExperience',String(currentExperience));

    },[level, currentExperience, challengesCompleted])

    function levelUp(){
        setLevel(level+1)
        setIsLevelOpenModalOpen(true);
    }

    function closeLevelUpModal(){
        setIsLevelOpenModalOpen(false);
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge =  challenges[randomChallengeIndex];
        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();
        if(Notification.permission === 'granted'){
            new Notification("Novo desafio",{
                body: `Valendo ${challenge.amount}xp`
            })
        }
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    function completeChallenge(){
        if(!activeChallenge){
            return;
        }

        const {amount} = activeChallenge;
        let finalExperience = currentExperience + amount;

        if(finalExperience > experienceToNextLevel){

            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);

    }

    return(
        <ChallengesContext.Provider 
            value={{
                    level, 
                    experienceToNextLevel,
                    activeChallenge,
                    currentExperience,
                    challengesCompleted,
                    startNewChallenge,
                    levelUp,
                    resetChallenge,
                    completeChallenge,
                    closeLevelUpModal
                }}
        >
            {children}


           { isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    )
}