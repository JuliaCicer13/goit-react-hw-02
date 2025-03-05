import styles from './App.module.css';
import Feedback from './Feedback.jsx'; 
import Options from './Options.jsx';
import Notification from './Notification.jsx';
import { useState,  useEffect } from 'react';

export default function App () {
  const [feedback, setFeedback] = useState(() =>{
    const savedFeedback =
    localStorage.getItem("feedback");
    return savedFeedback ?
    JSON.parse(savedFeedback) : {good: 0, neutral: 0, bad: 0};
  });
   
     const updateFeedback =
     (feedbackType) => {
      setFeedback((prevFeedback) => ({
        ...prevFeedback,
        [feedbackType]:
        prevFeedback[feedbackType] + 1,
      }));
     };

     const resetFeedback = () => {
      setFeedback({
        good: 0,
        neutral: 0,
        bad: 0
      })
     }
     const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

     const positiveFeedback =
     totalFeedback > 0 ?
     Math.round((feedback.good / totalFeedback) * 100) : 0;

     useEffect(() => {

      localStorage.setItem("feedback", JSON.stringify(feedback));
    }, [feedback]);
    
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title}>Sip Happens Café</h1>
      <p className={styles.comment}>Please leave your feedback about our service by selecting one of the options below.</p>
    </div>
          < Options 
          updateFeedback={updateFeedback}
          resetFeedback={resetFeedback}
          showReset={totalFeedback > 0}
          />
      
      {totalFeedback > 0 ? (
      <Feedback
      good={feedback.good}
      neutral={feedback.neutral}
      bad={feedback.bad}
      total={totalFeedback}
      positive={positiveFeedback} 
      />
       
       ) : (

        <Notification />
       )}
    </>
      
  );
};

  