import React from 'react';
import ContactMe from '../../ContactMe/ContactMe';
import MyProjects from '../MyProjects/MyProjects';
import Profile from '../Profile/Profile';
import Footer from './Footer';
import './Home.css'
const Home = () => {
    return (
        <div className='home-container'>
            <Profile></Profile>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;