import React from 'react'
import styles from './Table.module.scss';

const Table = (props) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {props.headings.map((heading, index) => (
            <th 
              className={`${props.alignment[index] === 'r' ? styles.tableRight : ''}`} 
              style={{width: props.sizes[index] + '%'}}>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map(row => (
            <tr>
              {row.map((cell, index) => (
                <td className={`${props.alignment[index] === 'r' ? styles.tableRight : ''}`}>{cell}</td>
              ))}
            </tr>
          )
        )}
      </tbody>
    </table>
  )
}

export default Table
