import {
    START_FETCHING_HOMES,
    ERROR_FETCHING_HOMES,
    SUCCESS_FETCHING_HOMES
} from './constants';

const statusList = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error'
}

const initialState = {
    data:[],
    status: statusList.idle
};

export default function reducer(state = initialState, action){
    switch(action.type){
        case START_FETCHING_HOMES:
            return {...state, status: statusList.process}
        case ERROR_FETCHING_HOMES:
            return {...state, status: statusList.error, data : {"name":"Indonesia","positif":"4,174,216","sembuh":"3,942,473","meninggal":"139,415","dirawat":"92,328"}}
        case SUCCESS_FETCHING_HOMES:
            return {
                ...state, 
                status      : statusList.success, 
                data        : action.result
            }
        // case SUCCESS_FETCHING_HOMES:
        //     return {...state, status: statusList.success, data: action.result, banners : action.result.banners,  newArrival : action.result.new_arrival}
      
        default:
            return state;
    }
}