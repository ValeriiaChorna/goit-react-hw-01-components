import React from 'react';
import Profile from './Profile-card/Profile';
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
      <h1>Home work 1</h1>
      <h2>Task 1: Profile-card</h2>
      <Profile user = {user} />
      <h2>Task 2: Statistics section</h2>
      <Statistics title="Upload stats" stats={statisticalData} />
      <h2>Task 3: Friend List</h2>
      <FriendList friends={friends} />
      <h2>Task 4: Transaction History</h2>
      <TransactionHistory items={transactions} />
    </>
  );
  }

  // console.log(<Profile user={user} />);