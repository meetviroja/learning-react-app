import React from "react";
import { Link, Outlet } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

const PfunctionComponent = () => {
    return (
        <>
            <div className='sec-one container'>
                <ol>
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="Pusestate"> Usestate </Link>
                        </MDBBtn>
                    </li>
                    <br />
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="Ptodolist"> Ptodolist </Link>
                        </MDBBtn>
                    </li>
                    <br />
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="Pcurdop"> Pcurdop </Link>
                        </MDBBtn>
                    </li>
                    <br />
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="Pcurdop2"> Pcurdop 2</Link>
                        </MDBBtn>
                    </li>
                    <br />
                </ol>
            </div>
            <Outlet />
        </>
    );
}

export default PfunctionComponent;