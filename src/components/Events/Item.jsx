import React from 'react'
import style from './Item.module.scss'

const EventItem = ({ children, ...props }) => {
  return <li {...props} className={style.item}>{children}</li>
}

export default EventItem
