import { Component } from "react";
import Header from "../../common/header/Header";
import './Home.css';
import StandardImageList from './StandardImageList';
import ImageList2 from './ImageList2';
import MediaCard from './MediaCard';



export default class Home extends Component{
     
    render(){
        return(<div>
            <Header></Header>
            
            <div className="up-movies"><span>Upcoming Movies</span></div>
           <div><StandardImageList  /></div>
            <div className="flex-container">
                <div className="left">
                    <ImageList2 />
                </div>
                <div className="right">
                    <br/><br/><MediaCard />
                </div>
            </div>
            
        </div>)
    }
}