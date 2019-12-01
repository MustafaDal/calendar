import React, { Fragment, useContext } from 'react'
import { Context } from '../../reducer'
import {
  SET_EVENT_VIEW_MODE,
  REMOVE_AN_EVENT
} from '../../reducer/action-types'
import { EVENT_VIEW_MODES } from '../../utils/enums'

const EventDetail = () => {
  const { state, dispatch } = useContext(Context)

  const edit = () => {
    dispatch({
      type: SET_EVENT_VIEW_MODE,
      payload: EVENT_VIEW_MODES.edit
    })
  }

  const remove = () => {
    dispatch({
      type: REMOVE_AN_EVENT,
      payload: state.event.id
    })
  }

  return (
    <Fragment>
      <h5>{state.event.title}</h5>
      <p>{state.event.content}</p>

      <button type="button" onClick={remove}>
        Delete
      </button>

      <button type="button" onClick={edit}>
        Edit
      </button>
    </Fragment>
  )
}

export default EventDetail
