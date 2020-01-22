import React,{Component} from 'react';
import User from './User';
import Palette from './Palette';
import InstaService from './../services/InstaService';
import ErrorMessage from './Error';

class Profile extends Component{
    InstaService= new InstaService();
    state={
        user: {},
        error: false,
        loading: true,
    }

    updateUser = () =>{
        this.InstaService.getUser()
        .then(user=>this.setState({
                user,
                error: false,
                loading: false,
            }))
        .catch(error=>this.setState({
            error: true,
        }))
    }

    componentDidMount(){
        this.updateUser();
    }
    
    render(){
        const {error, user, loading}= this.state;

        if(loading){
            return <div></div>
        }

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