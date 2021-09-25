import Header from '../../common/header/Header';
import {Link} from 'react-router-dom';
import './Details.css'
import { Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Details(){
    return(<div>
        <Header />
        <button className="bookshow" >Book Show</button>
        
      <div className="back_to_home"> <Link  to="/home">Back to Home</Link></div> <br/>
            <div className="movie_details">
            <div className="lef">
               
           <img src="https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"></img>


                
            </div>

            <div className="middle">
                                    <Typography variant="h2" gutterBottom component="div">
                                    Inception
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom component="div">
                                            <b>Genres:</b> Action,Adventure,Sci-Fi<br/>
                                            <b>Duration:</b> 148<br/>
                                            <b> Release Date:</b>2010-07-16<br/>
                                            <b>Rating:</b> 8.8 <br/>
                                            <br/>
                                            <b>Plot:</b>A thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.<br/>
                                            <b>Trailer:</b><br/>
                                            <ReactPlayer style={{width:100}}url='https://www.youtube.com/watch?v=8hP9D6kZseM' />

                                        
                                        
                                         </Typography>

            </div>

            <div className="right">
            <Typography variant="subtitle1" gutterBottom component="div">
                                            <b>Rate this movie:</b> <br/>
                                            <StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><br/>
                                            <b> Artists:</b><br/>
                                            <img className="leo" src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Leonardo_DiCaprio_visited_Goddard_Saturday_to_discuss_Earth_science_with_Piers_Sellers_%2826105091624%29_cropped.jpg"></img>&nbsp;
                                            <img className="leo" src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Joseph_Gordon-Levitt_2013.jpg"></img>

                                        
                                        
                                         </Typography>
            </div>
            </div>
    </div>)
}