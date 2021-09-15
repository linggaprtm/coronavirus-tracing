import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
    fetchHomes
} from '../../features/Homes/actions';
import TopBar from '../../components/TopBar';

import '../../styles/bootstrap/bootstrap.min.css';
import '../../styles/fontawesome/css/all.min.css';
import '../../styles/style.css';
import './index.css';

export default function Home(){
    let dispatch   = useDispatch();
    let homes      = useSelector(state => state.homes);
    // console.log(homes.data.name);
    React.useEffect(() => {
        dispatch(fetchHomes());
    }, [dispatch])

    return (
        <div>
            <TopBar/>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-12 mt-3">
                        <Link to="/province/positif">
                            <div className="card-numb bg-blue d-flex">
                                <div>
                                    <div className="title">Angka Kasus Positif </div>
                                    <div className="numb">{homes.data.positif}</div>
                                </div>
                                <div className="ml-auto mt-auto title">
                                    <i className="fas fa-frown"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-12 col-12 mt-3">
                        <Link to="/province/sembuh">
                            <div className="card-numb bg-green d-flex">
                                <div>
                                    <div className="title">Angka Kesembuhan</div>
                                    <div className="numb">{homes.data.sembuh}</div>
                                </div>
                                <div className="ml-auto mt-auto title">
                                    <i className="fas fa-smile-beam"></i>
                                </div>
                                
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-12 col-12 mt-3">
                        <Link to="/province/meninggal">
                            <div className="card-numb bg-red d-flex">
                                <div>
                                    <div className="title">Angka Meninggal Dunia</div>
                                    <div className="numb">{homes.data.meninggal}</div>
                                </div>
                                <div className="ml-auto mt-auto title">
                                    <i className="fas fa-sad-cry"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-12 col-12 mt-3"> 
                        <div className="card-numb bg-orange d-flex">
                            <div>
                            <div className="title">Angka Dalam Perawatan</div>
                            <div className="numb">{homes.data.dirawat}</div>
                            </div>
                            <div className="ml-auto mt-auto title">
                                <i className="fas fa-sad-tear"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-12 mt-3">
                    <Link to="/province">
                        <div className="card-numb bg-green1 text-center">
                            <div className="numb">Lihat Kasus Per Provinsi </div>
                        </div>
                    </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}