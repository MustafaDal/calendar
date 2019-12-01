import React, { Fragment, useState, useContext } from 'react'
import { v1 as uuidv1 } from 'uuid'
import { Context } from '../../reducer'
import { CREATE_AN_EVENT } from '../../reducer/action-types'

const EventCreate = ({ col }) => {
  const { dispatch } = useContext(Context)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleClick = () => {
    if (!title) return alert('Title cannot be empty!')

    dispatch({
      type: CREATE_AN_EVENT,
      payload: {
        id: uuidv1(),
        colId: col.id,
        title,
        content
      }
    })
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
        Send
      </button>
    </Fragment>
  )
}

export default EventCreate
