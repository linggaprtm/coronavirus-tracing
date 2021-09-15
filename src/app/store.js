// import module dari redux
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
// import redux thunk middleware
import thunk from 'redux-thunk';
// import authReducer
import HomesReducer from '../features/Homes/reducer';
import ProvinceReducer from '../features/Province/reducer';
// buat composer untuk menghubungkan dengan chrome devTools Redux
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// gabung reducer, untuk sementara kosong, karena kita belum reducer
const rootReducers = combineReducers({
    homes   : HomesReducer,
    province : ProvinceReducer
});

// buat store, dan gunakan composerEnhancer + middleware thunk 
const store = createStore(rootReducers, composerEnhancer(applyMiddleware(thunk)));

// export store
export default store