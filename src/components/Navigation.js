import React from 'react'
import '../css/navigation.css'


const Navigation = ({image, github})=>{
    return(
        <div className="header" id="bootstrap-override">
            <div className="container">
                <img src={image} alt=
                "Logo" className="logo" />
                <h1>Find a Pup</h1>
                <ul>
                    <li>
                        <a href="/">Search</a>
                        <hr />
                    </li>
                    <li>
                        <a href="/">All Breeds -- TBD</a>
                        <hr />
                    </li>
                    <li>
                        <a href="/">Random Breed -- TBD</a>
                        <hr />
                    </li>
                </ul>
                <a href="https://www.github.com" className="small-icon"><img src={github} alt="Github"/></a>
            </div>
        </div>
        /*
        Logo
        List of nav
        link to github
        */
    )
}
export default Navigation;