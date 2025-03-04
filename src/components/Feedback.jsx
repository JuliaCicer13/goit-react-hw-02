import styles from './Feedback.module.css';

export default function Feedback () {
    const updateFeedback = (good, bad, neutral) => {
       
        return (
            <>
            <ul className = {styles.list}>
            <li className={styles.wrap}>
                {good}Good: 0
            </li>
            <li className={styles.wrap}>
                {neutral}Neutral: 0
            </li>
            <li className={styles.wrap}>
                {bad}Bad: 0
                </li>
         </ul>
            </>
        )
       }

}



