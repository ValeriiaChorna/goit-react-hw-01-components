import React from 'react';
import Profile from './ProfileCard/Profile';
import user from '../data/user.json';
import Statistics from './Statistics/Statistics';
import statisticalData from  '../data/statistical-data.json';
import FriendList from './FriendsList';
import friends from '../data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from  '../data/transactions.json';

export default function App() {
  return (
    <>
      <Profile user = {user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
  }

  // console.log(<Profile user={user} />);