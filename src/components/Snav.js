import React from 'react';
import '../styles/Snav.css';
import { AiFillHome } from 'react-icons/ai';
import { FaUserGraduate } from 'react-icons/fa';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Snav = () => {
    return(
        <div className="snav">
            <Link to="/home"><motion.span whileHover={{scale: 1.2, cursor: 'pointer'}}><AiFillHome color='white'/></motion.span></Link>
            <Link to="/education"><motion.span whileHover={{scale: 1.2, cursor: 'pointer'}}><FaUserGraduate color='white'/></motion.span></Link>
            <Link to="/gallery"><motion.span whileHover={{scale: 1.2, cursor: 'pointer'}}><MdPhotoSizeSelectActual color='white'/></motion.span></Link>
            <Link to="/contact"><motion.span whileHover={{scale: 1.2, cursor: 'pointer'}}><BsTelephoneFill color='white'/></motion.span></Link>
        </div>
    )
}

export default Snav;