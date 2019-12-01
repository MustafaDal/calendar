import React from 'react'

const EventItem = ({ children, ...props }) => {
  return <li {...props}>{children}</li>
}

export default EventItem
