import React, { useState, useContext } from 'react'
import { Context } from '../../reducer'
import { SET_ACTIVE_COL, UPDATE_AN_EVENT } from '../../reducer/action-types'
import style from './Common.module.scss'

const EventCreate = () => {
  const { state, dispatch } = useContext(Context)
  const [title, setTitle] = useState(state.event.title)
  const [content, setContent] = useState(state.event.content)

  const handleClick = () => {
    if (!title) return alert('Title cannot be empty!')

    dispatch({
      type: UPDATE_AN_EVENT,
      payload: {
        ...state.event,
        title,
        content
      }
    })

    dispatch({ type: SET_ACTIVE_COL, payload: null })
  }

  return (
    <div className={style.box}>
      <h3 className={style.title}>Create an Event</h3>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div>
        <textarea
          placeholder="Content"
          rows="3"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </div>

      <button type="button" onClick={handleClick}>
        Update
      </button>
    </div>
  )
}

export default EventCreate
