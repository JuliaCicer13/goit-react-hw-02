import './App.module.css'
import Profile from './Profile.jsx';
import userData from "../userData.json";
import FriendList from "./FriendList.jsx";
import friends from "../friends.json";
import TransactionHistory from "./TransactionHistory.jsx";
import transactions from "../transaction.json";

export default function App () {
  const {username, tag, location, avatar, status } = userData;
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={status}
      />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </>
      
  );
};

  