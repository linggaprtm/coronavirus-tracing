import debounce from 'debounce-promise';

import {
    SUCCESS_FETCHING_PROVINCE,
    START_FETCHING_PROVINCE,
    ERROR_FETCHING_PROVINCE
} from './constants';
import { getProvince } from '../../api/province';

export const startFetchingProvince = () => {
    return {
        type: START_FETCHING_PROVINCE
    }
}

export const errorFetchingProvince = () => {
    return {
        type: ERROR_FETCHING_PROVINCE
    }
}

export const successFetchingProvince = ({result, message}) => {
    return {
        type: SUCCESS_FETCHING_PROVINCE,
        message,
        result: result,
    }
}

let debouncedFetchProvince = debounce(getProvince);

export const fetchProvince = () => {
    return async (dispatch, getState) => {
        dispatch(startFetchingProvince());        

        const params = {
            valid    : 1,
        }

        try{
            let {data:{result, message}} = await debouncedFetchProvince(params);
            dispatch(successFetchingProvince({result, message}));
        } catch(err) {
            dispatch(errorFetchingProvince());
        }
    }
}