import React, { Component } from 'react'

export default class Jsx extends Component {
    render() {
        const user = {
            firstname: "meet",
            lastname: "patel",
        }
        let something = "hey guys";
        const heading = <h1>{something}</h1>
        return (
            <div className='container'>
                {heading}
                2+2 = {2 + 2}
                <p>fullname : {user.firstname} {user.lastname}</p>
            </div>
        )
    }
}
