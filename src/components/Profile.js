import React from 'react';
import User from './User';
import Palette from './Palette';


const Profile = () =>{
    return(
        <div className="container profile">
            <User/>
            <Palette/>
        </div>
    );
}

export default Profile;