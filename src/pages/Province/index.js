import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
    fetchProvince
} from '../../features/Province/actions';
import TopBar from '../../components/TopBar';

import '../../styles/bootstrap/bootstrap.min.css';
import '../../styles/fontawesome/css/all.min.css';
import '../../styles/style.css';
import './index.css';

export default function Province(){
    const { id }   = useParams();
    let dispatch   = useDispatch();
    let province   = useSelector(state => state.province);
    // console.log(province.data);
    React.useEffect(() => {
        dispatch(fetchProvince());
    }, [dispatch])

    return (
        <div>
            <TopBar/>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        {id === undefined ? 
                            <div className="table-responsive  ">
                                <table className="table table-sahdow table-bordered">
                                    <thead className="bg-green1">
                                        <tr>
                                            <th className="text-white" scope="col">NO</th>
                                            <th className="text-white" scope="col">PROVINSI</th>
                                            <th className="text-white" scope="col" width="20%">POSITIF</th>
                                            <th className="text-white" scope="col" width="20%">SEMBUH</th>
                                            <th className="text-white" scope="col" width="20%">MENINGGAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {province.data.map((item, index) => {
                                            return(
                                                <tr>
                                                    <td>{index+1}</td>
                                                    <td>{item.attributes.Provinsi}</td>
                                                    <td>{(item.attributes.Kasus_Posi === null)?'0': item.attributes.Kasus_Posi} </td>
                                                    <td>{(item.attributes.Kasus_Semb === null)?'0': item.attributes.Kasus_Semb} </td>
                                                    <td>{(item.attributes.Kasus_Meni === null)?'0': item.attributes.Kasus_Meni} </td>
                                                </tr>
                                            )
                                        })}
                                        
                                    </tbody>
                                </table>
                            </div>
                        :''}
                        {id === 'positif' ? 
                            <div className="table-responsive  ">
                                <table className="table table-sahdow table-bordered">
                                    <thead className="bg-blue">
                                        <tr>
                                            <th className="text-white" scope="col">NO</th>
                                            <th className="text-white" scope="col">PROVINSI</th>
                                            <th className="text-white" scope="col" width="20%">POSITIF</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {province.data.map((item, index) => {
                                            return(
                                                <tr>
                                                    <td>{index+1}</td>
                                                    <td>{item.attributes.Provinsi}</td>
                                                    <td>{(item.attributes.Kasus_Posi === null)?'0': item.attributes.Kasus_Posi} </td>
                                                </tr>
                                            )
                                        })}
                                        
                                    </tbody>
                                </table>
                            </div>
                        :''}

                        {id === 'meninggal' ? 
                            <div className="table-responsive  ">
                                <table className="table table-sahdow table-bordered">
                                    <thead className="bg-red">
                                        <tr>
                                            <th className="text-white" scope="col">NO</th>
                                            <th className="text-white" scope="col">PROVINSI</th>
                                            <th className="text-white" scope="col" width="20%">MENINGGAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {province.data.map((item, index) => {
                                            return(
                                                <tr>
                                                    <td>{index+1}</td>
                                                    <td>{item.attributes.Provinsi}</td>
                                                    <td>{(item.attributes.Kasus_Meni === null)?'0': item.attributes.Kasus_Meni} </td>
                                                </tr>
                                            )
                                        })}
                                        
                                    </tbody>
                                </table>
                            </div>
                        :''}

                        {id === 'sembuh' ? 
                            <div className="table-responsive  ">
                                <table className="table table-sahdow table-bordered">
                                    <thead className="bg-green">
                                        <tr>
                                            <th className="text-white" scope="col">NO</th>
                                            <th className="text-white" scope="col">PROVINSI</th>
                                            <th className="text-white" scope="col" width="20%">SEMBUH</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {province.data.map((item, index) => {
                                            return(
                                                <tr>
                                                    <td>{index+1}</td>
                                                    <td>{item.attributes.Provinsi}</td>
                                                    <td>{(item.attributes.Kasus_Semb === null)?'0': item.attributes.Kasus_Semb} </td>
                                                </tr>
                                            )
                                        })}
                                        
                                    </tbody>
                                </table>
                            </div>
                        :''}
                        
                    </div>

                </div>
            </section>
        </div>
    )
}