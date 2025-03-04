import styles from './Options.module.css';

export default function Options ({updateFeedback}) {
   
    return (
        
        <div className={styles.buttons}>
           <button className={styles.buttonGood} onClick={updateFeedback }>Good</button>
           <button className={styles.buttonNeutral} onClick={updateFeedback }>Neutral</button>
           <button className={styles.buttonBad} onClick={updateFeedback }>Bad</button>
        </div>
    );
}