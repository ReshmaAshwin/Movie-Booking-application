import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';

import moviesData from '../../common/moviesData';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow:'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.secondary,
  },
  titleBar: {
    background:
      'linear-gradient(to top,rgba(255, 255, 255, 0.54))',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function SingleLineImageList() {
  const classes = useStyles();

  return (<div>
    <Link to="details">
        <div className={classes.root}>
      <ImageList sx={{ width: 300, height: 250 }} cols={5} rowHeight={250} className={classes.imageList}>
        {moviesData.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.poster_url} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
            
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    </Link>
     
    </div>
  );
}