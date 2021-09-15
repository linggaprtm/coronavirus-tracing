import store from './store';

let currentAuth;

function listener(){
    // buat variable previousAuth dan berikan currentAuth sebagai nilai
    let previousAuth = currentAuth;

    // update nilai currentAuth dari nilai state terbaru
    currentAuth = store.getState().auth;

    //cek apakah niai state 'auth' berubah dari nilai sebelumnya
    if(currentAuth !== previousAuth){
        //jika berubah simpan ke localStorage
        localStorage.setItem('auth', JSON.stringify(currentAuth));
    }
}

function listen(){
    // dengarkan perubahan store
    store.subscribe(listener);
}

export { listen }