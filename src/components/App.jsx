import styles from './App.module.css';
import Feedback from './Feedback.jsx'; 
import Options from './Options.jsx';
import FeedBack from "../feedback.json";
import { useState,  } from 'react';

export default function App () {
     const [clicks, setClicks ] = useState(0);
            const handleClick = () => {
                setClicks(clicks + 1);
              };
     const {good, neutral,bad } = FeedBack;
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title}>Sip Happens Café</h1>
      <p className={styles.comment}>Please leave your feedback about our service by selecting one of the options below.</p>
    </div>
   
     <Options value={clicks} updateFeedback={handleClick}  />

     <Feedback
       good={good}
       neutral={neutral}
       bad={bad}
     
     />
    </>
      
  );
};

  