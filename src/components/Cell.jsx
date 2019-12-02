import React, { Fragment, useContext } from 'react'
import { Reference, Popper } from 'react-popper'
import { Context } from '../reducer'
import {
  SET_ACTIVE_COL,
  SET_AN_EVENT,
  SET_EVENT_VIEW_MODE
} from '../reducer/action-types'
import {
  EventItem,
  EventList,
  EventCreate,
  EventDetail,
  EventEdit
} from './Events'
import { EVENT_VIEW_MODES } from '../utils/enums'
import style from './Cell.module.scss'
const styleClose = style.close

const Cell = ({ col, popperRef }) => {
  const { dispatch, state } = useContext(Context)
  const events = state.events.filter(event => event.colId === col.id)

  const createEvent = () => {
    dispatch({ type: SET_ACTIVE_COL, payload: col })
    dispatch({ type: SET_EVENT_VIEW_MODE, payload: EVENT_VIEW_MODES.create })
  }

  const handleColumnClick = e => {
    if (e.target.dataset.type === 'box') {
      createEvent()
    } else if (e.target.dataset.type === 'list-item') {
      dispatch({ type: SET_ACTIVE_COL, payload: col })
      dispatch({ type: SET_EVENT_VIEW_MODE, payload: EVENT_VIEW_MODES.detail })
    }
  }

  const handleEventClick = event => e => {
    dispatch({ type: SET_AN_EVENT, payload: event })
    dispatch({ type: SET_EVENT_VIEW_MODE, payload: EVENT_VIEW_MODES.detail })
  }

  return (
    <div className={style.col} onClick={handleColumnClick} data-type="box">
      <h2 className={style.caption}>
        <span ref={popperRef}>{col.dayeOfMonth}</span>
      </h2>

      <EventList>
        {events.map(event => (
          <EventItem
            key={event.id}
            onClick={handleEventClick(event)}
            data-type="list-item"
          >
            {event.title}
          </EventItem>
        ))}
      </EventList>

      <div className="text-center">
        <button type="button" className={style.create} onClick={createEvent}>
          +
        </button>
      </div>
    </div>
  )
}

const CellWithPopper = props => {
  const { dispatch, state } = useContext(Context)

  const isPopperVisible = state.activeCol === props.col

  const handleClose = () => {
    dispatch({ type: SET_ACTIVE_COL, payload: null })
  }

  if (!isPopperVisible) return <Cell {...props} />

  return (
    <Fragment>
      <Reference>{({ ref }) => <Cell {...props} popperRef={ref} />}</Reference>

      <Popper placement="right-top">
        {({ ref, style, placement, arrowProps }) => (
          <div ref={ref} style={style} data-placement={placement}>
            <div ref={arrowProps.ref} style={arrowProps.style} />
            <button
              type="button"
              className={styleClose}
              onClick={handleClose}
            ></button>

            {state.eventViewMode === EVENT_VIEW_MODES.create && (
              <EventCreate col={props.col} />
            )}

            {state.eventViewMode === EVENT_VIEW_MODES.edit && (
              <EventEdit col={props.col} />
            )}

            {state.eventViewMode === EVENT_VIEW_MODES.detail && (
              <EventDetail col={props.col} />
            )}
          </div>
        )}
      </Popper>
    </Fragment>
  )
}

export default CellWithPopper
