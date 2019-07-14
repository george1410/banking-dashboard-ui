import React from 'react';
import styles from './Main.module.scss';
import Card from './Card';
import Balance from './Balance';
import Table from './Table';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        sidebar
      </div>
      <div className={styles.content}>
        <Card title='Balance'>
          <Balance />
        </Card>

        <Card title='Pending Transactions'>
          <Table 
            sizes={[20, 40, 25, 15]}
            alignment={['l','l','l','r']}
            headings={['Date', 'Description', 'Category', 'Amount']}
            data={
              [
                ['14 July 2019', 'TESCO EXPRESS', 'Groceries', '£12.73'],
                ['14 July 2019', 'TESCO EXPRESS', 'Groceries', '£12.73'],
                ['14 July 2019', 'TESCO EXPRESS', 'Groceries', '£12.73']
              ]
            }/>
        </Card>
      </div>
    </div>
  )
}
