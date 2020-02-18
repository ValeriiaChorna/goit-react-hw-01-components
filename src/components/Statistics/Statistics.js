import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import StatisticsItems from './StatisticItems';

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title.toUpperCase()}</h2>}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => <StatisticsItems key={id} id={id} label={label} percentage={percentage} />)}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
