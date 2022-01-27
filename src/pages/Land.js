import React from "react";
import '../styles/Land.css';
import Nav from "../components/Nav";
import logo from '../svg/landing-logo.svg';
import Spec from "../components/Spec";
import { FaLinkedin, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { motion } from "framer-motion";

const Land = () => {
    return(
        <div className="land">
            <div id="left">
                <img id="logo" alt="logo" src={logo}/>
                <Spec/>
                <div id="social">
                    <motion.section
                        whileHover={{
                            scale: 1.2,
                            cursor: 'pointer'
                        }}
                    ><FaFacebookF color="#5B5B5B"/></motion.section>
                    <motion.section
                        whileHover={{
                            scale: 1.2,
                            cursor: 'pointer'
                        }}
                    ><FaInstagram color="#5B5B5B"/></motion.section>
                    <motion.section
                        whileHover={{
                            scale: 1.2,
                            cursor: 'pointer'
                        }}
                    ><FaLinkedin color="#5B5B5B"/></motion.section>
                    <motion.section
                        whileHover={{
                            scale: 1.2,
                            cursor: 'pointer'
                        }}
                    ><FaTwitter color="#5B5B5B"/></motion.section>
                </div>
            </div>
            <div id="right">
                <Nav/>
            </div>
        </div>
    )
}

export default Land;