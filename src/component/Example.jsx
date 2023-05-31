import React from 'react';
import Navbar from '../comcomponent/Navbar';
import "../App.css"
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Outlet } from 'react-router-dom';

const Example = () => {
    return (
        <>
            <Navbar />
            <div className='sec-one'>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-6">
                            <MDBBtn className='mx-auto d-block' color='dark' >  <Link to="ClassComponent"> Class Component </Link></MDBBtn>
                        </div>
                        <div className="col-6">
                            <MDBBtn className='mx-auto d-block' color='dark' ><Link to="FunctionComponent">Function Component  </Link></MDBBtn>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    );
};

export default Example;