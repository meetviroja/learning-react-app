import React from 'react';
import "../App.css"
import { Link, Outlet } from 'react-router-dom';
import "../App.css"
import { MDBBtn } from 'mdb-react-ui-kit';

const ClassComponent = () => {
    return (
        <>
            <div className='sec-one container'>
                <h2>you are in class component</h2>
                <ol>
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="Classcomintro"> Class component introduction </Link>
                        </MDBBtn>
                        <br />
                    </li>
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="Constructor"> Constructor </Link>
                        </MDBBtn>
                        <br />
                    </li>
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="Jsx"> Jsx </Link>
                        </MDBBtn>
                        <br />
                    </li>
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="Props"> Props </Link>
                        </MDBBtn>
                        <br />
                    </li>
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="State"> State </Link>
                        </MDBBtn>
                        <br />
                    </li>
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="LifeCycle"> LifeCycle </Link>
                        </MDBBtn>
                        <br />
                    </li>
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="ConditionalRendaring"> ConditionalRendaring </Link>
                        </MDBBtn>
                        <br />
                    </li>
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="ListKeys"> ListKeys </Link>
                        </MDBBtn>
                        <br />
                    </li>
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="ControlledCompo"> ControlledCompo </Link>
                        </MDBBtn>
                        <br />
                    </li>
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="UncontrolledCompo"> UncontrolledCompo </Link>
                        </MDBBtn>
                        <br />
                    </li>
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="CompositionVsInheritance"> CompositionVsInheritance </Link>
                        </MDBBtn>
                        <br />
                    </li>
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="StateChild"> StateChild </Link>
                        </MDBBtn>
                        <br />
                    </li>
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="StateLifting"> StateLifting </Link>
                        </MDBBtn>
                        <br />
                    </li>
                    <li>
                        <MDBBtn color='greay'>
                            <Link to="Array"> Array </Link>
                        </MDBBtn>
                        <br />
                    </li>
                </ol>
            </div>
            <Outlet />
        </>
    );
};

export default ClassComponent;