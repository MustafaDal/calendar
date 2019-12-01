import { getDaysInMonth, startOfMonth, addDays } from 'date-fns'
import { chunk } from 'lodash-es'

export const generateCalendarDates = date => {
  const daysInMonth = getDaysInMonth(date)
  const starts = startOfMonth(date)

  const listOfCurrentMonth = Array.from({ length: daysInMonth }, (_, i) => {
    const date = addDays(starts, i)
    return {
      id: date.toJSON(),
      dayeOfMonth: i + 1,
      date
    }
  })

  const listOfNextMonth = Array.from({ length: 35 - daysInMonth }, (_, i) => {
    const date = addDays(starts, daysInMonth + i)

    return {
      id: date.toJSON(),
      dayeOfMonth: i + 1,
      date
    }
  })

  const totalList = [...listOfCurrentMonth, ...listOfNextMonth]

  return chunk(totalList, 7)
}
