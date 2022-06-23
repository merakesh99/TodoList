import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    // let footerStyle={
    // //     position: "relative",
    // //     top: "70vh",
    // //     width: "100%",
    // //    border: "5px dotted yellow"
    // }
    return (

        <footer className="bg-dark text-light py-2">
            <p className="text-center">

           Copyright &copy; 2022 <Link to={{ pathname: "https://rakeshsadhukhan.in" }} target="_blank" >Rakesh Sadhukhan</Link>
            </p>
        </footer>
    )
}

