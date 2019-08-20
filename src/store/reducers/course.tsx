import {INIT_DATA} from '../types/course'

const initialState = {
    data: []
}

export const indexData = (state = initialState, action) => {
    switch (action.type) {
        case INIT_DATA: 
            console.log(action.payload)
            return Object.assign({}, state, action.payload)

        default :
            return initialState
    }
}