import React from 'react';
import Navbar from '../comcomponent/Navbar';
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <div>
                <Navbar />
                <h2>you are in contact page</h2>
                <MDBBtnGroup aria-label='Basic example'>
                    <MDBBtn>
                        <Link to='/contact/leftbtn'>left</Link>
                    </MDBBtn>
                    <MDBBtn><Link to='/contact/middelbtn'>middel</Link></MDBBtn>
                    <MDBBtn>
                        <Link to='/contact/Rightbtn'>Right</Link>
                    </MDBBtn>
                </MDBBtnGroup>
                <Outlet />
            </div>
            <br />
        </>
    );
};

export default Contact;