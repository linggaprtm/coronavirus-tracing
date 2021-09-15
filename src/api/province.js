import axios from 'axios';

import { config } from '../config';

export async function getProvince(){
    return await axios.get( `${config.api_host}indonesia/provinsi`, { crossDomain: true });
}