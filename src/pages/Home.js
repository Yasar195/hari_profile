import React from 'react';
import Snav from '../components/Snav';
import artfolio from '../svg/artfolio.png';
import climber from '../svg/climber.svg';
import '../styles/Home.css';

const Home = () => {
    return(
        <div className="home">
            <div id="left">
                <img id="artfolio" alt="artfolio" src={artfolio}/>
                <img id="climber" alt="climber" src={climber}/>
                <Snav/> 
            </div>
           <div id="right">
               <div id="div">
                    <h1>Hari Prasad</h1>
                    <h4>is a</h4>
                    <h2>ui/ux Generalist</h2>
               </div>
               <div id="div">
                   <h1>Generalist</h1>
                   <h4>
                        UX generalist can perform all of the user research and design activities on a project, instead of having specialist
                   </h4>
               </div>
           </div>
        </div>
    )
}

export default Home;