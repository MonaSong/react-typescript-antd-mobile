import {INIT_DATA} from '../types/course'
import {getIndexData} from '../../api/index'

export const initData = (params) => {
    return {
        type: INIT_DATA,
        payload: getIndexData()
    }
}
