import React from 'react';
import Head from 'next/head';

import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/experienceBar';
import Profile from '../components/Profile';
import ChallengeBox from '../components/ChallangeBox';

import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
          <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown/>
              </div>
              <div>
                <ChallengeBox />
              </div>
          </section>
      </CountdownProvider>
    </div>
  )
}
