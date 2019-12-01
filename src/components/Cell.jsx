import React, { Fragment } from 'react'
import { Reference, Popper } from 'react-popper'
import { EventItem, EventList } from './Events'
import style from './Calendar.module.scss'

const Cell = ({ caption, events = [], popperRef, showPopper }) => {
  const handleColumnClick = e => {
    console.log(e)
    showPopper()
  }

  return (
    <div ref={popperRef} className={style.col} onClick={handleColumnClick}>
      <h2 className={style.caption}>{caption}</h2>

      <EventList>
        {events.map(event => (
          <EventItem key={event.id}>{event.title}</EventItem>
        ))}
      </EventList>
    </div>
  )
}

const CellWithPopper = ({ isPopperVisible, ...props }) => {
  if (!isPopperVisible) return <Cell {...props} />

  return (
    <Fragment>
      <Reference>{({ ref }) => <Cell {...props} popperRef={ref} />}</Reference>

      <Popper>
        {({ ref, style, placement, arrowProps }) => (
          <div ref={ref} style={style} data-placement={placement}>
            Popper element
            <div ref={arrowProps.ref} style={arrowProps.style} />
          </div>
        )}
      </Popper>
    </Fragment>
  )
}

export default CellWithPopper
