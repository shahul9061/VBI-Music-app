import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Grid from '@material-ui/core/Grid';
import { red } from "@material-ui/core/colors";
import CardHeader from "@material-ui/core/CardHeader";
import CloseIcon from '@material-ui/icons/Close';
import MenuList from './MenuList';
import Img1 from '../../img/img.jpg';
import { truncate } from '../../utils'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid white'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    avatar: {
        backgroundColor: red[300]
    }
}));

function SongsCard({ data,showSM,showMenu,handleClick }) {
    const classes = useStyles();
    const theme = useTheme();

 
    return (
        <>
            {data?.map((val, i) => (
                <Grid item xs={12} sm={showSM ? 12 : 12} key={i}>
                    <Card className={classes.root} style={{backgroundColor: !showMenu ? 'lightgray': 'white'}}>
                        <CardHeader
                            action={
                               showMenu ? <MenuList songData={val}/> : <IconButton onClick={() => handleClick(val)}><CloseIcon /></IconButton>
                            }
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    {truncate(val?.title,20)}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {truncate(val?.title,15)}
                                </Typography>
                            </CardContent>

                        </div>
                        <CardMedia
                            className={classes.cover}
                            image={val?.thumbnailUrl || Img1}
                            title={truncate(val?.title,20) || "Live from space album cover"}
                        />
                    </Card>
                </Grid>
            ))}
        </>
    );
}

SongsCard.propTypes = {
    showMenu: PropTypes.bool,
    showSM: PropTypes.bool,
    handleClick: PropTypes.func,
    data: PropTypes.instanceOf(Array),
};

  
export default SongsCard;
