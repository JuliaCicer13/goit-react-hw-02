import styles from './TransactionHistoryItem.module.css';

export default function TransactionHistoryItem({ type, amount, currency}) {
   return (
    <tr className={styles.container}>
        <th className={styles.type}>{type}</th>
        <th className={styles.amount}>{amount}</th>
        <th className={styles.currency}>{currency}</th>
    </tr>
   )
}