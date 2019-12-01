import { getDaysInMonth, startOfMonth, addDays } from 'date-fns'
import { chunk } from 'lodash-es'

export const generateCalendarDates = date => {
  const daysInMonth = getDaysInMonth(date)
  const starts = startOfMonth(date)

  const listOfCurrentMonth = Array.from({ length: daysInMonth }, (_, i) => {
    return {
      dayeOfMonth: i + 1,
      date: addDays(starts, i)
    }
  })

  const listOfNextMonth = Array.from({ length: 35 - daysInMonth }, (_, i) => {
    return {
      dayeOfMonth: i + 1,
      date: addDays(starts, daysInMonth + i)
    }
  })

  const totalList = [...listOfCurrentMonth, ...listOfNextMonth]

  return chunk(totalList, 7)
}
