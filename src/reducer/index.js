import { createContext } from 'react'
import * as actions from './action-types'

export const Context = createContext(null)

export const initialState = {
  list: [],
  events: [],
  event: null,
  eventViewMode: null,
  activeCol: null
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_COL_LIST:
      return {
        ...state,
        list: action.payload
      }
    case actions.SET_ACTIVE_COL:
      return {
        ...state,
        activeCol: action.payload
      }
    case actions.SET_AN_EVENT: {
      return {
        ...state,
        event: action.payload
      }
    }
    case actions.CREATE_AN_EVENT: {
      return {
        ...state,
        events: [...state.events, action.payload]
      }
    }
    case actions.UPDATE_AN_EVENT: {
      const index = state.events.findIndex(
        item => item.id === action.payload.id
      )

      if (index > -1) {
        state.events[index] = {
          ...state.events[index],
          ...action.payload
        }
      }

      return state
    }
    case actions.SET_EVENT_VIEW_MODE: {
      return {
        ...state,
        eventViewMode: action.payload
      }
    }
    default:
      throw new Error()
  }
}
