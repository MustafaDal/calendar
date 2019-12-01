import React, { useContext } from 'react'
import { format } from 'date-fns'
import { addMonths, subMonths } from 'date-fns'
import style from './Header.module.scss'
import { DATE_MONTH_FORMAT } from '../utils/enums'
import { Context } from '../reducer'
import { SET_CURRENT_DATE } from '../reducer/action-types'

const Header = () => {
  const { dispatch, state } = useContext(Context)

  const prev = () => {
    dispatch({
      type: SET_CURRENT_DATE,
      payload: subMonths(state.currentDate, 1)
    })
  }

  const next = () => {
    dispatch({
      type: SET_CURRENT_DATE,
      payload: addMonths(state.currentDate, 1)
    })
  }

  const today = () => {
    dispatch({
      type: SET_CURRENT_DATE,
      payload: new Date()
    })
  }

  return (
    <header className={style.header}>
      <button type="button" onClick={prev}>
        Prev
      </button>
      <button type="button" onClick={next}>
        Next
      </button>
      <button type="button" onClick={today}>
        Today
      </button>
      <h1>{format(state.currentDate, DATE_MONTH_FORMAT)}</h1>
    </header>
  )
}

export default Header
