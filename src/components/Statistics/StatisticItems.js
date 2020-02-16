import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function StatisticItems({ stats }) {
  return (
    <>
      {stats.map(({ id, label, percentage }) => (
        <li key={id}>
          <div className={styles.itemContener}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </div>
        </li>
      ))}
    </>
  );
}

StatisticItems.propTypes = {
  stats: PropTypes.array.isRequired,
};

export default StatisticItems;
