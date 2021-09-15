import debounce from 'debounce-promise';

import {
    SUCCESS_FETCHING_HOMES,
    START_FETCHING_HOMES,
    ERROR_FETCHING_HOMES
} from './constants';
import { getHomes } from '../../api/home';

export const startFetchingHomes = () => {
    return {
        type: START_FETCHING_HOMES
    }
}

export const errorFetchingHomes = () => {
    return {
        type: ERROR_FETCHING_HOMES
    }
}

export const successFetchingHomes = ({result, message}) => {
    return {
        type: SUCCESS_FETCHING_HOMES,
        message,
        result: result,
    }
}

let debouncedFetchHomes = debounce(getHomes);

export const fetchHomes = () => {
    return async (dispatch, getState) => {
        dispatch(startFetchingHomes());        

        const params = {
            valid    : 1,
        }

        try{
            let {data:{result, message}} = await debouncedFetchHomes(params);
            dispatch(successFetchingHomes({result, message}));
        } catch(err) {
            dispatch(errorFetchingHomes());
        }
    }
}