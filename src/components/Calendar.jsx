import React, { useState, useCallback, useMemo } from 'react'
import { Manager } from 'react-popper'
import Header from './Header'
import Row from './Row'
import Cell from './Cell'
import { generateCalendarDates } from '../utils'
import style from './Calendar.module.scss'

const Calendar = () => {
  const [activeCol, setActiveCol] = useState(null)
  const currentDate = useMemo(() => new Date(), [])
  const list = useMemo(() => generateCalendarDates(currentDate), [currentDate])

  const setCol = useCallback(
    col => e => {
      setActiveCol(col)
    },
    []
  )

  return (
    <Manager>
      <div className={style.container}>
        <Header currentDate={currentDate} />

        <div className={style.list}>
          {list.map((row, rowIndex) => (
            <Row key={rowIndex}>
              {row.map(col => (
                <Cell
                  key={col.dayeOfMonth}
                  caption={col.dayeOfMonth}
                  isPopperVisible={activeCol === col}
                  showPopper={setCol(col)}
                />
              ))}
            </Row>
          ))}
        </div>
      </div>
    </Manager>
  )
}

export default Calendar
