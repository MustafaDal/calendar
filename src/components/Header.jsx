import React from 'react'
import { format } from 'date-fns'
import style from './Calendar.module.scss'
import { DATE_MONTH_FORMAT } from '../utils/enums'

const Header = ({ currentDate }) => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <button type="button">Prev</button>
        <button type="button">Next</button>
        <button type="button">Today</button>
        <h1>{format(currentDate, DATE_MONTH_FORMAT)}</h1>
      </header>
    </div>
  )
}

export default Header
