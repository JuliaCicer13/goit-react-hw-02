import styles from './Feedback.module.css';

export default function Feedback ({good, neutral, bad}) {
       
        return (
            <>
            <ul className = {styles.list}>
            <li className={styles.wrap}>
               Good:{good}
            </li>
            <li className={styles.wrap}>
                Neutral:{neutral} 
            </li>
            <li className={styles.wrap}>
                Bad:{bad} 
                </li>
         </ul>
            </>
        )
       }





