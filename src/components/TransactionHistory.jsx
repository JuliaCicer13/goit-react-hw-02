import styles from './TransactionHistoryItem.module.css';
import TransactionHistoryItem from './TransactionHistoryItem.jsx';

export default function TransactionHistory({items}) {

    return (
   <table
   className={styles.TransactionTable}>
      <thead className={styles.top}>
        <tr className={styles.info}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
      </thead>
      <tbody>
   {items.map(transaction => (
      <TransactionHistoryItem
        key={transaction.id}
        type={transaction.type}
        amount={transaction.amount}
        currency={transaction.currency}
      /> 
   ))}
  </tbody>
   </table>

    )
}