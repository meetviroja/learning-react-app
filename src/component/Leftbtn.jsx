import React from 'react';
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
import { Link, Outlet } from 'react-router-dom';

const Leftbtn = () => {
    return (
        <div>
            <h2>you are in left button</h2>
            <br />
            <br />
            <br />
            <br />
            <MDBBtnGroup shadow='0' aria-label='Basic example'>
                <MDBBtn color='secondary' outline>
                    <Link to='/contact/leftbtn/Meet'>Meet</Link>
                </MDBBtn>
                <MDBBtn color='secondary' outline>
                    Middle
                </MDBBtn>
                <MDBBtn color='secondary' outline>
                    Right
                </MDBBtn>
            </MDBBtnGroup>
            <Outlet />
        </div>
    );
};

export default Leftbtn;