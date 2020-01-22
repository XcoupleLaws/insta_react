import React, { Component } from 'react';
import User from './User';
import InstaService from './../services/InstaService';
import ErrorMessage from './Error';


export default class Users extends Component {
    InstaService= new InstaService();
    state = {
        peoples: [],
        error: false,
        loading: true,
        user: {},
    }
    
    updateUser = () =>{
        this.InstaService.getUser()
        .then(response=> this.setState({
            user: response.name
        }))
    }
    
    updateUser = () =>{
        this.InstaService.getUser()
        .then(user=> this.setState({
            user
        }))
        .catch(this.onError)
    }
 
    updatePeoples = () =>{
        this.InstaService.getAllPeople()
        .then(this.onPostLoading)
        .catch(this.onError)
    }

    onPostLoading= (peoples) =>{
        this.setState({
            peoples,
            error: false,
            loading: false
        })
        console.log(this.state.peoples);
    }

    onError= (error) =>{
        this.setState({
            error: true
        })
    }

    componentDidMount(){
        this.updatePeoples();
        this.updateUser();
    }

    renderComponent = (Array)=>{
        return Array.map(item=>{
            const {photo, altname, name, id} = item;
           return (
            <div key= {id}>
                <User 
                    src={photo}
                    alt={altname}
                    name={name}
                    min
                    />
            </div>
           )
        })
    }
    
    
    render(){
        const {peoples, loading, error, user}= this.state;

        const items= this.renderComponent(peoples);

        if(loading && !error){
            return <h1>Loading...</h1>
        }

        if(error){
            return <ErrorMessage />
        }

        return (
            <div className="right">
                <User 
                src= {user.src}
                alt= {user.alt}
                name= {user.name}
                />
                <div className="users__block">
                {items}
                </div>
            </div>
        )
        
    }
}