import React from 'react'
import style from './Calendar.module.scss'

const Row = ({ children }) => {
  return <div className={style.row}>{children}</div>
}

export default Row
