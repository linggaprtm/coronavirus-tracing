import {
    START_FETCHING_PROVINCE,
    ERROR_FETCHING_PROVINCE,
    SUCCESS_FETCHING_PROVINCE
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
        case START_FETCHING_PROVINCE:
            return {...state, status: statusList.process}
        case ERROR_FETCHING_PROVINCE:
            return {...state, status: statusList.error, data : [{"attributes":{"FID":11,"Kode_Provi":31,"Provinsi":"DKI Jakarta","Kasus_Posi":406205,"Kasus_Semb":393166,"Kasus_Meni":6625}},{"attributes":{"FID":12,"Kode_Provi":32,"Provinsi":"Jawa Barat","Kasus_Posi":277553,"Kasus_Semb":243650,"Kasus_Meni":3678}},{"attributes":{"FID":13,"Kode_Provi":33,"Provinsi":"Jawa Tengah","Kasus_Posi":183027,"Kasus_Semb":162823,"Kasus_Meni":8001}},{"attributes":{"FID":15,"Kode_Provi":35,"Provinsi":"Jawa Timur","Kasus_Posi":146808,"Kasus_Semb":134525,"Kasus_Meni":10600}},{"attributes":{"FID":23,"Kode_Provi":64,"Provinsi":"Kalimantan Timur","Kasus_Posi":68136,"Kasus_Semb":64718,"Kasus_Meni":1631}},{"attributes":{"FID":27,"Kode_Provi":73,"Provinsi":"Sulawesi Selatan","Kasus_Posi":61419,"Kasus_Semb":60164,"Kasus_Meni":931}},{"attributes":{"FID":16,"Kode_Provi":36,"Provinsi":"Banten","Kasus_Posi":47101,"Kasus_Semb":43892,"Kasus_Meni":1200}},{"attributes":{"FID":17,"Kode_Provi":51,"Provinsi":"Bali","Kasus_Posi":44236,"Kasus_Semb":41608,"Kasus_Meni":1317}},{"attributes":{"FID":4,"Kode_Provi":14,"Provinsi":"Riau","Kasus_Posi":42698,"Kasus_Semb":37374,"Kasus_Meni":1050}},{"attributes":{"FID":14,"Kode_Provi":34,"Provinsi":"Daerah Istimewa Yogyakarta","Kasus_Posi":38703,"Kasus_Semb":33636,"Kasus_Meni":948}},{"attributes":{"FID":3,"Kode_Provi":13,"Provinsi":"Sumatera Barat","Kasus_Posi":36268,"Kasus_Semb":33058,"Kasus_Meni":783}},{"attributes":{"FID":22,"Kode_Provi":63,"Provinsi":"Kalimantan Selatan","Kasus_Posi":32612,"Kasus_Semb":29518,"Kasus_Meni":937}},{"attributes":{"FID":2,"Kode_Provi":12,"Provinsi":"Sumatera Utara","Kasus_Posi":29198,"Kasus_Semb":25952,"Kasus_Meni":965}},{"attributes":{"FID":33,"Kode_Provi":94,"Provinsi":"Papua","Kasus_Posi":20308,"Kasus_Semb":11223,"Kasus_Meni":207}},{"attributes":{"FID":6,"Kode_Provi":16,"Provinsi":"Sumatera Selatan","Kasus_Posi":20068,"Kasus_Semb":17712,"Kasus_Meni":979}},{"attributes":{"FID":21,"Kode_Provi":62,"Provinsi":"Kalimantan Tengah","Kasus_Posi":19780,"Kasus_Semb":16577,"Kasus_Meni":442}},{"attributes":{"FID":25,"Kode_Provi":71,"Provinsi":"Sulawesi Utara","Kasus_Posi":15638,"Kasus_Semb":12961,"Kasus_Meni":504}},{"attributes":{"FID":19,"Kode_Provi":53,"Provinsi":"Nusa Tenggara Timur","Kasus_Posi":14200,"Kasus_Semb":12468,"Kasus_Meni":366}},{"attributes":{"FID":8,"Kode_Provi":19,"Provinsi":"Bangka Belitung","Kasus_Posi":12822,"Kasus_Semb":11272,"Kasus_Meni":201}},{"attributes":{"FID":26,"Kode_Provi":72,"Provinsi":"Sulawesi Tengah","Kasus_Posi":12125,"Kasus_Semb":11109,"Kasus_Meni":325}},{"attributes":{"FID":24,"Kode_Provi":65,"Provinsi":"Kalimantan Utara","Kasus_Posi":11702,"Kasus_Semb":10978,"Kasus_Meni":186}},{"attributes":{"FID":9,"Kode_Provi":18,"Provinsi":"Lampung","Kasus_Posi":10838,"Kasus_Semb":9581,"Kasus_Meni":253}},{"attributes":{"FID":1,"Kode_Provi":11,"Provinsi":"Aceh","Kasus_Posi":10814,"Kasus_Semb":9367,"Kasus_Meni":432}},{"attributes":{"FID":28,"Kode_Provi":74,"Provinsi":"Sulawesi Tenggara","Kasus_Posi":10396,"Kasus_Semb":9818,"Kasus_Meni":209}},{"attributes":{"FID":18,"Kode_Provi":52,"Provinsi":"Nusa Tenggara Barat","Kasus_Posi":10291,"Kasus_Semb":7750,"Kasus_Meni":373}},{"attributes":{"FID":10,"Kode_Provi":21,"Provinsi":"Kepulauan Riau","Kasus_Posi":9381,"Kasus_Semb":8801,"Kasus_Meni":230}},{"attributes":{"FID":34,"Kode_Provi":91,"Provinsi":"Papua Barat","Kasus_Posi":8879,"Kasus_Semb":8371,"Kasus_Meni":147}},{"attributes":{"FID":31,"Kode_Provi":81,"Provinsi":"Maluku","Kasus_Posi":7515,"Kasus_Semb":7056,"Kasus_Meni":116}},{"attributes":{"FID":20,"Kode_Provi":61,"Provinsi":"Kalimantan Barat","Kasus_Posi":7503,"Kasus_Semb":6548,"Kasus_Meni":43}},{"attributes":{"FID":5,"Kode_Provi":15,"Provinsi":"Jambi","Kasus_Posi":7407,"Kasus_Semb":5987,"Kasus_Meni":108}},{"attributes":{"FID":7,"Kode_Provi":17,"Provinsi":"Bengkulu","Kasus_Posi":6630,"Kasus_Semb":5743,"Kasus_Meni":172}},{"attributes":{"FID":30,"Kode_Provi":76,"Provinsi":"Sulawesi Barat","Kasus_Posi":5443,"Kasus_Semb":5251,"Kasus_Meni":118}},{"attributes":{"FID":29,"Kode_Provi":75,"Provinsi":"Gorontalo","Kasus_Posi":5355,"Kasus_Semb":4990,"Kasus_Meni":161}},{"attributes":{"FID":32,"Kode_Provi":82,"Provinsi":"Maluku Utara","Kasus_Posi":4414,"Kasus_Semb":4117,"Kasus_Meni":120}}]}
        case SUCCESS_FETCHING_PROVINCE:
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