import React, {Component} from 'react';
import InstaService from '../services/InstaService';
import ErrorMessage from './Error';


export default class Palette extends Component{
    InstaService= new InstaService();
    state={
        error: false,
        photos: []
    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
        .then(this.onPhotosLoaded)
        .catch(this.onError);
    }

    onError= () =>{
        this.setState({
            error: true
        });
    }
    
    onPhotosLoaded= (photos) =>{
        this.setState({
            error: false,
            photos
        })
    }

    componentDidMount(){
        this.updatePhotos();
    }

    renderItems(array){
        return array.map(item=>{
            const {src, alt}= item;

            return(
                <img src={src} alt={alt}></img>
            )
        })
    }

    render(){
        const {error, photos}= this.state;

        if(error){
            return<ErrorMessage/>;
        }

        const items= this.renderItems(photos);

        return(
            <div className="palette">
                {items}
            </div>

        )
    }
}