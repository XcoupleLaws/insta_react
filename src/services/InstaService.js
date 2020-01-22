export default class InstaService {
    constructor(){
        this._apiBase = 'http://localhost:3000/';
    }

    getResource = async (url) =>{
        const responce = await fetch(`${this._apiBase}${url}`);
    
        if(!responce.ok){
            throw new Error(`Could not fetch ${url}; received ${responce.status}`)
        }
        
        return await responce.json();
    }

    getUser = async () =>{
        const responce= await this.getResource('user/');
        return responce;
    }

    getAllPosts = async () =>{
        const responce = await this.getResource('posts/');
        return responce;
    }

    getAllPhotos = async () =>{
        const responce = await this.getResource('posts/');
        return responce.map(this._transformPosts);
    }

    getAllPeople = async () =>{
        const responce= await this.getResource('posts/');
        return responce.map((post)=>{
            return({
                name: post.name,
                altname: post.altname,
                photo: post.photo,
                id: post.id
            })
        }
        )}

    _transformPosts = (post) =>{
        return {
            src: post.src,
            alt: post.alt
        }
    }

    
}