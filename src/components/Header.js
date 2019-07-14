import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          logo
        </div>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            <div className={styles.leftcontent}>
              <h1>Hey, George</h1>
            </div>

            <div className={styles.rightcontent}>
              <div className={styles.bankname}>NATWEST</div>
              <div className={styles.accountmeta}>
                CURRENT ACCOUNT&nbsp;
                <span className={styles.slash}>/</span>
                &nbsp;34258442&nbsp;
                <span className={styles.slash}>/</span>
                &nbsp;60-06-33&nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
