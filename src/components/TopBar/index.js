import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function TopBar (){
    return (
        <div>
            <div className="menu-area">
            {/* <!-- start .top-menu-area --> */}
                <div className="top-menu-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-6 v_middle pt-3 pb-3">
                                <Link to="/">
                                <div> <h5>Data Kasus Coronavirus di Indonesia</h5> </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}