import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import './Home.css';
import genres from './genres'
import artists from './Artist'
import Checkbox from '@mui/material/Checkbox';
import moviesData from '../../common/moviesData';


export default function MediaCard() {

  const onChange=(args)=>{
    var stored=args.target.value;
    var filteredMovies= moviesData.title.filter((movie)=>{
      return(stored===filteredMovies);

    })
  }
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        
        
        width="240"
        
    
      />
      <CardContent>
        <h3 className="heading">FIND MOVIES BY:</h3>
        <ValidatorForm>
        <TextField sx={{ m: 1, minWidth: 250 }} 
        id="standard-basic" 
        label="Movie Name" 
        variant="standard"
        onChange={onChange}
        validators={["required"]} 
        errorMessages={["field cannot be empty"]} />
        
        <FormControl  variant="standard" sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="demo-simple-select-standard-label">Genres</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
    
          
          label="Genres"    >
            {genres.map((gen)=>(
                <MenuItem value={gen.id}>
                  {gen.name}
                  </MenuItem>
            ))}
        
        </Select>
      </FormControl>
      <FormControl  variant="standard" sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="demo-simple-select-standard-label">Artist</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
            label="Artist">
          
            {artists.map((art)=>(
                <MenuItem value={art.id} >
                {art.first_name} {art.last_name}
                  </MenuItem>
            ))}
          
        </Select>
      </FormControl>
      <TextField sx={{ m: 1, minWidth: 250 }} type="date" id="standard-basic" label="Release Date start" variant="standard" />
      <TextField sx={{ m: 1, minWidth: 250 }} type="date" id="standard-basic" label="Release Date start" variant="standard" />
      <CardActions className="but">
      <Button type="submit" variant="contained" color="primary" >
  Apply
</Button>
        
      </CardActions>
          </ValidatorForm>
      </CardContent>
     
    </Card>
  );
}