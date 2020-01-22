import React, { Component } from 'react';
import User from './User';
import InstaService from './../services/InstaService';
import ErrorMessage from './Error';


export default class Users extends Component {
    InstaService= new InstaService();
    state = {
        peoples: [],
        error: false,
        loadingPeoples: true,
        loadingUser: true,
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
            user,
            loadingUser: false
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
            loadingPeoples: false
        })
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
        const {peoples, loadingUser, loadingPeoples, error, user}= this.state;

        const items= this.renderComponent(peoples);

        if((loadingUser || loadingPeoples) && !error){
            // return <h1 style={{color: "rgb(0,0,0,0.1)"}}>loading...</h1>
            return <div></div>
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