import Profile from './Profile/profile';
import Statistics from 'components/Statistics/statistics';
import FriendList from './FriendList/friendList';
// import TransactionHistory from './Transaction/transactionHistory';
import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import friends from 'components/FriendList/friends.json';
// import transactions from '../transactions.json';

export const App = () => {
  return (
    <div>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          color: '#010101',
        }}
      >
        <Profile
          userName={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>

      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          color: '#010101',
        }}
      >
        <Statistics stats={data} />
      </div>

      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          color: '#010101',
        }}
      >
        <FriendList friends={friends} />
      </div>
      {/* <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 18,
          color: '#010101',
        }}
      >
        <TransactionHistory items={transactions} />
      </div>  */}
    </div>
  );
};
