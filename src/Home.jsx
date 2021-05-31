import React from 'react';
import Similar from './Similar';
import web from '../src/images/home.svg';

const Home = () => {
    return (
        <>
            <Similar 
            name='Grow your business with' 
            visit='/services' 
            buttonName="Get Started" 
            imgSrc={web} 
            paragraph='We are the team of talented developers.'    
            />
        </>
    );
}

export default Home;