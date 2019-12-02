import React, { useContext } from 'react'
import { Context } from '../../reducer'
import {
  SET_EVENT_VIEW_MODE,
  REMOVE_AN_EVENT
} from '../../reducer/action-types'
import { EVENT_VIEW_MODES } from '../../utils/enums'
import style from './Common.module.scss'

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
    <div className={style.box}>
      <h3 className={style.title}>{state.event.title}</h3>
      <p className={style.content}>{state.event.content}</p>

      <button type="button" onClick={remove}>
        Delete
      </button>

      <button type="button" onClick={edit}>
        Edit
      </button>
    </div>
  )
}

export default EventDetail
