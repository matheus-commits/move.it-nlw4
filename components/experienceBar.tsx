import React from 'react';

export default function ExperienceBar () {

    return(
        <header className="experience-bar">
            <span>0xp</span>
            <div>
             <span className="current-exp" style={{left:"50%"}}> 
                    300xp
                </span>
                <div style={{width:"50%"}}/>
                
            </div>
            <span>600xp</span>
        </header>
    );
}