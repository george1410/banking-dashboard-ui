import React from 'react';
import styles from './Balance.module.scss';

export default function Balance() {
  return (
    <div className={styles.balanceContainer}>
      <div className={styles.left}>
        <div className={styles.amount + ' ' + styles.negative}>
          £-32.03
        </div>
        <div className={styles.label}>
          Available Balance
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.amount + ' ' + styles.positive}>
          £43.65
        </div>
        <div className={styles.label}>
          Current Balance
        </div>
      </div>
    </div>
  )
}
