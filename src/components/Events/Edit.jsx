import React, { Fragment, useState, useContext } from 'react'
import { Context } from '../../reducer'
import { SET_ACTIVE_COL, UPDATE_AN_EVENT } from '../../reducer/action-types'

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
    <Fragment>
      <h3>Create an Event</h3>
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
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </div>

      <button type="button" onClick={handleClick}>
        Update
      </button>
    </Fragment>
  )
}

export default EventCreate
