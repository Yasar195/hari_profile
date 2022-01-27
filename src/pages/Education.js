import React from "react";
import Snav from "../components/Snav";
import artfolio from '../svg/artfolio.png';
import '../styles/Education.css';

const Education = () => {
    return(
        <div>
            <div id="header">
                <img src={artfolio} alt="artfolio"/>
                <h1>Education & Experience</h1>
            </div>
            <div className="maindiv">
                <div className="leftdiv">
                    <h1>B.tech CSE 2019-23</h1>
                    <h2>
                        Ahalia school of engineering & technology Palakkad, Kerala
                    </h2>
                </div>
                <div className="rightdiv">
                    <div className="experience">
                        <h1>Worked at Photography studios as Designer</h1>
                        <h2>2018</h2>
                    </div>
                    <div className="experience">
                        <h1>Successfully Freelanced and made a steady income by having a professional partnerships with Budding Startups & clients from different states</h1>
                        <h2>2019 till now</h2>
                    </div>
                    <div className="experience">
                        <h1>Vongo’s UIUX & Graphic Designer</h1>
                        <h2>2021</h2>
                    </div>
                </div>
            </div>
            <Snav/>
        </div>
    )
}

export default Education;