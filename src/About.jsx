import React from 'react';
import Similar from './Similar';
import aboutImg from '../src/images/about.svg' 

const About = () => {
    return (
        <>
            <Similar
                name='Welcome to About us page'
                visit='/contact' 
                buttonName="Contact Us" 
                imgSrc={aboutImg}
                paragraph='You run your business. We take care of your development needs. Get access to an entire team of experts, ready whenever you need us.'
            />
        </>
    );
}

export default About;