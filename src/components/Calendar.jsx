import React, { useMemo, useContext, useEffect } from 'react'
import { Manager } from 'react-popper'
import Header from './Header'
import Row from './Row'
import Cell from './Cell'
import { generateCalendarDates } from '../utils'
import { Context } from '../reducer'
import { SET_COL_LIST } from '../reducer/action-types'
import style from './Calendar.module.scss'

const Calendar = () => {
  const { dispatch, state } = useContext(Context)
  const currentDate = useMemo(() => new Date(), [])

  useEffect(() => {
    const list = generateCalendarDates(currentDate)
    dispatch({ type: SET_COL_LIST, payload: list })
  }, [dispatch, currentDate])

  return (
    <Manager>
      <div className={style.container}>
        <Header currentDate={currentDate} />

        <div className={style.list}>
          {state.list.map((row, rowIndex) => (
            <Row key={rowIndex}>
              {row.map(col => (
                <Cell key={col.id} col={col} />
              ))}
            </Row>
          ))}
        </div>
      </div>
    </Manager>
  )
}

export default Calendar
