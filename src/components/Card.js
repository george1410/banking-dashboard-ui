import React from 'react';
import styles from './Card.module.scss';

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.cardTitle}>{props.title}</h2>
        <div className={styles.status}>Updated a few seconds ago</div>
      </div>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  )
}
