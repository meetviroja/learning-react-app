import React from 'react';
import "../App.css"
import { MDBBtn } from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';

const Functioncomponent = () => {
    return (
        <>
            <div className='sec-one container'>
                <h2>you are in function component</h2>
                <ol>
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="Usestate"> Usestate </Link>
                        </MDBBtn>
                    </li>
                    <br />
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="Apifatching1"> Api fatching </Link>
                        </MDBBtn>
                    </li>
                    <br />
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="Apifatching2"> Api fatching 2 </Link>
                        </MDBBtn>
                    </li>
                    <br />
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="Apiimg"> Api Photos </Link>
                        </MDBBtn>
                    </li>
                    <br />
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="Usememo"> use memo </Link>
                        </MDBBtn>
                    </li>
                    <br />

                </ol>
            </div >
            <Outlet />
        </>


    );
};

export default Functioncomponent;