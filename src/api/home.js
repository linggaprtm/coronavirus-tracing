import axios from 'axios';

import { config } from '../config';

export async function getHomes(){
    return await axios.get( `${config.api_host}indonesia`, { crossDomain: true });
}