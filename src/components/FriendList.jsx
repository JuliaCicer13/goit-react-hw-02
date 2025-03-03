import styles from './FriendListItem.module.css';
import FriendListItem from './FriendListItem.jsx';

export default function FriendList({friends}) {
    return (
      <ul className={styles.list}>
     
      {friends.map(friend => (
        <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        /> 
      ))}
 </ul>
    );
  }
  

