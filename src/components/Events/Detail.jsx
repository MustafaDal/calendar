import React, { Fragment, useContext } from 'react'
import { Context } from '../../reducer'
import { SET_EVENT_VIEW_MODE } from '../../reducer/action-types'
import { EVENT_VIEW_MODES } from '../../utils/enums'

const EventDetail = () => {
  const { state, dispatch } = useContext(Context)

  const handleClick = () => {
    dispatch({
      type: SET_EVENT_VIEW_MODE,
      payload: EVENT_VIEW_MODES.edit
    })
  }

  return (
    <Fragment>
      <h5>{state.event.title}</h5>
      <p>{state.event.content}</p>

      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </Fragment>
  )
}

export default EventDetail
