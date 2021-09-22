import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import './Home.css';

import moviesData from '../../common/moviesData';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 50,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    overflow:'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'wrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.secondary,
  },
  subtitle: {
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

  return (
    <div className={classes.root}>
      <ImageList cols={4} gap={4} rowHeight={350} className={classes.imageList}>
        {moviesData.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.poster_url} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={item.release_date}
              classes={{
                root: classes.titleBar,
                title: classes.title,
                subtitle:classes.subtitle,
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
  );
}