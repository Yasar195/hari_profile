import React from 'react';
import '../styles/Nav.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div className="nav">
            <h3 id="h3">some quick anchors</h3>
            <h1 id="jump">jump to</h1>
            <div className="links">
                <Link id="link" to="home"><motion.h3
                    whileHover={{
                        scale:1.1,
                        cursor: 'pointer'
                    }}
                >Home</motion.h3></Link>
                <motion.h3
                    whileHover={{
                        scale:1.1,
                        cursor: 'pointer'
                    }}
                >About</motion.h3>
                <motion.h3
                    whileHover={{
                        scale:1.1,
                        cursor: 'pointer'
                    }}
                >Gallery</motion.h3>
                <motion.h3
                    whileHover={{
                        scale:1.1,
                        cursor: 'pointer'
                    }}
                >Contact me</motion.h3>
            </div>
        </div>
    )
}

export default Nav;