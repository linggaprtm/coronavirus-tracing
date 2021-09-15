import axios from 'axios';

import { config } from '../config';

export async function getHomes(params){
    let formBody = [];
    for (var property in params) {
        var encodedKey      = encodeURIComponent(property);
        var encodedValue    = encodeURIComponent(params[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return await axios.get( `${config.api_host}indonesia`);
}