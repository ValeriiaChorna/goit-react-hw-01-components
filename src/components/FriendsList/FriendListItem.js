import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={styles.item} key = {id}>
      <span className={isOnline ? styles.green : styles.red}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  avatar: '',
  name: 'Friend Name',
  isOnline: false,
};

FriendListItem.propTypes = {
  id:PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
