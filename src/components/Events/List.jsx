import React from 'react'
import style from './List.module.scss'

const EventList = ({ children }) => {
  return children && <ul className={style.list}>{children}</ul>
}

export default EventList
