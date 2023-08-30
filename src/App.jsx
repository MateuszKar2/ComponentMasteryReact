import {Profile, Statistics} from './components';

import user from './data/user.json';
import data from './data/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
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
    title={data.label}
    stats={data.percentage}
    />
    </div>

);
};