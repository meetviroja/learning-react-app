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
                </ol>
            </div>
            <Outlet />
        </>
    );
}

export default PfunctionComponent;