import { types } from '../Action/ActionTypes'
const INITIAL_STATE = {
    home: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.HOME: {
            return{...state, home : action.payload}
        }
        default: return state
    }
}