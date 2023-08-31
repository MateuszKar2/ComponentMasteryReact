import {Profile, Statistics, FriendList, TransactionHistory} from './components';

import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    
    <Profile
    username={user.username}
    tag={user.teg}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />

    <Statistics
    title="Statistics"
    stats={data}
    />

    <FriendList 
    friends={friends}
    avatar={friends.avatar} 
    name={friends.name}
    isOnline={friends.isOnline}
    />

    <TransactionHistory 
    items={transactions} 
    />;
    </div>

);
};