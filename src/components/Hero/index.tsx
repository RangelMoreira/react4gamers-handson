import React from 'react';

import {TITLE_SIZE} from '../../settings/constants';

import './index.css';


const Hero =()=>{
    return(
       <div
            style={{
              position: "absolute",
              bottom: 48*5,
              left: 48*5,
              width:TITLE_SIZE,
              height:100,
              backgroundImage: "url(./assets/HERO.png)",
              backgroundRepeat: 'no-repeat',
              animation: 'hero-animation 1s steps(4) infinite'
            }}
       />

       
        
    );
}

export default Hero;