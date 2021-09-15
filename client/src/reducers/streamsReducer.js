import _ from 'lodash'

import {
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM
} from '../actions/types'

export default ( state = {}, action ) => {
    switch (action.type){
        case CREATE_STREAM:
            return { ...state, [action.payload._id]: action.payload }
        case EDIT_STREAM:
            return { ...state, [action.payload._id]: action.payload }
        case FETCH_STREAM:
            return { ...state, [action.payload._id]: action.payload } 
        case DELETE_STREAM:
            return _.omit(state, action.payload)
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, '_id') }    
        default:
            return state
    }
}