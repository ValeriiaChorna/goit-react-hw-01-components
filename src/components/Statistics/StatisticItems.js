import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function StatisticItems({ id, label, percentage }) {
  return (
        <li key={id}>
          <div className={styles.itemContener}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </div>
        </li>
  );
}

StatisticItems.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItems;
