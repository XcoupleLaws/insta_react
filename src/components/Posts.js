import React, {Component} from 'react';
import InstaService from '../services/InstaService';
import User from './User';
import ErrorMessage from './Error';


export default class Posts extends Component{
    InstaService= new InstaService();
    state ={
        posts: [],
        error: false,
        loading: true
    }

    
    updatePosts(){
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
        
    }

    onPostsLoaded = (posts) =>{
        this.setState({
            posts,
            error: false,
            loading: false
        })
    }

    onError = (error) =>{
        this.setState({
            error: true,
            loading: false
        })
    }

    componentDidMount() {
        this.updatePosts();
    }

    renderItem(array) {
        return array.map(item=>{
            const {name, altname, photo, src, descr, id, alt} = item;
            
            return (
                <div key={id} className="post">
                    <User 
                    src={photo}
                    alt={altname}
                    name={name}
                    min/> 
                    <img src={src} alt={alt}></img>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr}
                    </div>
                </div>
            )
        })
    }

    render(){
        const {error, posts, loading} = this.state;
        
        if(loading){
            return(
                // return <h1 style={{color: "rgb(0,0,0,0.1)"}}>loading...</h1>
                <div></div> //smtng
            )
        }

        if(error){
            return <ErrorMessage/>
        }

        const items = this.renderItem(posts);
        return(
            <div className="left">
                {items}
            </div>
        );
    }
}