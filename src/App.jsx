import {Profile, Statistics, FriendList, TransactionHistory} from './components';
import {data, friends, transactions, user} from './data';
import data from './data';
// import user from './data/user.json';
// import data from './data/data.json';
// import friends from './data/data.json';
// import transactions from './data/data.json';

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
    {/* <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} /> */}

    <FriendList 
    avatar={friends.avatar} 
    name={friends.name}
    isOnline={friends.name}
    />;

    <TransactionHistory 
    items={transactions} />;

    </div>

);
};