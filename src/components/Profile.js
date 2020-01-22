import React,{Component} from 'react';
import User from './User';
import Palette from './Palette';
import InstaService from './../services/InstaService';
import ErrorMessage from './Error';

class Profile extends Component{
    InstaService= new InstaService();
    state={
        user: {},
        error: false
    }

    updateUser = () =>{
        this.InstaService.getUser()
        .then(user=>this.setState({
                user,
                error: false,
            }))
        .catch(error=>this.setState({
            error: true,
        }))
    }

    componentDidMount(){
        this.updateUser();
    }
    
    render(){
        const {error, user}= this.state;

        if(error){
            return <ErrorMessage/>
        }
    
        return(
        <div className="container profile">
            <User 
                src= {user.src}
                alt= {user.alt}
                name= {user.name}
                />
            <Palette/>
        </div>
    )
    }
}

export default Profile;