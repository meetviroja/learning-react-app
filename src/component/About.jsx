import React from 'react';
import Navbar from '../comcomponent/Navbar';
import "../App.css"

const Aboutpage = () => {
    return (
        <div className='sec-one'>
            <Navbar />

            <h2>you are in About page</h2>
            <img src="https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/join-us-banner?qlt=82&wid=768&ts=1624538498965&dpr=off&fit=constrain" alt="lklkm" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <video src="https://assets.volvo.com/is/content/VolvoInformationTechnologyAB/volvo-brand-film-0x360-730k" controls autoPlay muted></video>
        </div>
    );
};

export default Aboutpage;