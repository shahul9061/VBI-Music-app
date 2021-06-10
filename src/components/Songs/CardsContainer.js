import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from './Card';
import {  SONGS_CARD_CONTAINER_NO_SONGS} from "../../constants";


function CardsContainer({songs}) {

  
    return (
        <Grid container spacing={3}>
           { songs !== null ? <Card data={songs} showSM={true} showMenu={true} /> : 
               <Grid item xs={12}>
                <div  style={{textAlign:'center'}}>
                <Typography component="h6" variant="h6">
                    {SONGS_CARD_CONTAINER_NO_SONGS}
                </Typography>
                </div>
                </Grid>
                }
        </Grid>
    );
}

CardsContainer.propTypes = {
    songs: PropTypes.instanceOf(Array),
};


export default CardsContainer;