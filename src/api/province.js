import axios from 'axios';

import { config } from '../config';

export async function getProvince(params){
    return await axios.get( `${config.api_host}indonesia/provinsi`);
}