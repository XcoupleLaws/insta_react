import React from 'react';
import User from './User';


export default function Users (){
    return(
        <div className="right">
            <User 
                src="http://intertransservice.ru/img/gallery/43798c9b4611b14df2c9d20c7da5823d.jpg" 
                alt="man" 
                name="Scott"/>
            <div className="users__block">
                <User 
                src="http://intertransservice.ru/img/gallery/43798c9b4611b14df2c9d20c7da5823d.jpg" 
                alt="man" 
                name="Scott"
                min/>
                <User 
                src="http://intertransservice.ru/img/gallery/43798c9b4611b14df2c9d20c7da5823d.jpg" 
                alt="man" 
                name="Scott"
                min/>
                <User 
                src="http://intertransservice.ru/img/gallery/43798c9b4611b14df2c9d20c7da5823d.jpg" 
                alt="man" 
                name="Scott"
                min/>
            </div>
        </div>
    );
}