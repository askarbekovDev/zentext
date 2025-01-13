import React from 'react'
import styles from './index.module.scss'

const Status = ({ state = 'new' }: { state: 'new' | 'approved' | 'rejected' }) => {
  return (
    <div className={`${styles.status} ${(state === 'approved') ? styles.approved : (state === 'rejected') ? styles.rejected : styles.new}`}>
      {(state === 'approved') ? 'Одобрен' : (state === 'rejected') ? 'Отклонен' : 'Новый'}
    </div>
  )
}

export default Status;
