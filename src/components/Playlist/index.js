/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import Card from '../Songs/Card';
import { SHUFFLE_TEXT, NO_SONGS_IN_PLAYLIST } from '../../constants';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '30px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    backgroundColor: {
        backgroundColor: '#8F2A8B',
        marginBottom: '30px'
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    }
}));


function Playlist({ location, history }) {
    const classes = useStyles();
    const [playlist, setPlaylist] = useState(null)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (location?.state) {
            setPlaylist(location?.state)
        } else if (localStorage?.playlist) {
            setPlaylist(JSON.parse(localStorage?.playlist))
        } else {
            history.push('/')
        }
    }, [location.state])

    const handleClick = (val) => {
        let obj1 = playlist
        let obj2 = val
        obj1 = {
            ...obj1,
            songs: obj1.songs.filter((x) => x.songId !== obj2.songId),
        };
        localStorage.setItem("playlist", JSON.stringify(obj1))
        setPlaylist(obj1)
    }

    useEffect(() => {
        if (playlist?.songs?.length === 0) {
            history.push('/')
        }
    }, [playlist])

    const shuffleArray = () => {
        var shuffledArray = [].concat(playlist.songs);
        shuffledArray.sort(function () {
            return 0.5 - Math.random();
        });
        let shuffledPlaylist = playlist
        shuffledPlaylist.songs = [...shuffledArray]
        setCount(count => count + 1)
        setPlaylist(shuffledPlaylist)
    }

    return (

        <div className={classes.root}>
            <AppBar position="static" className={classes.backgroundColor}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" style={{textTransform:'capitalize'}}>
                        playlist - {playlist?.name}
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{ float: 'right' }}>
                {playlist?.songs?.length > 1 &&
                    <Fab variant="extended" onClick={shuffleArray}>
                        <ShuffleIcon className={classes.extendedIcon} />
                        {SHUFFLE_TEXT}
                    </Fab>}
            </div>
            {playlist?.songs?.length > 0 ? <Grid container spacing={3} >
                <Card data={playlist?.songs} showSM={false} showMenu={false} handleClick={handleClick} />
            </Grid> : <Typography component="h6" variant="h6" style={{ textAlign: 'center' }}>
                    {NO_SONGS_IN_PLAYLIST}
                </Typography>}
        </div>
    )
}

Playlist.propTypes = {
    location: PropTypes.instanceOf(Object),
    history: PropTypes.instanceOf(Object)
};

export default Playlist;