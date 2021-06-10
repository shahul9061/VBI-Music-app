import React,{useState,useEffect} from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch,useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Modal from './Modal';
import {createdAt } from '../../utils'
import {createPlaylist,localStorageCreatePlaylist} from '../../actions'
import PlaylistCard from './PlaylistCard';
import {ADD_PLAYLIST} from '../../constants'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    }
}));

export default function Playlist() {

    const playlistState = useSelector((state) => state?.data?.playlists)
    const [open, setOpen] = React.useState(false);
    const [playlistName , setPlaylistName] = useState('');
    const [playList,setPlaylist] = useState([])
    const dispatch = useDispatch()

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleChange = (e) => {
        setPlaylistName(e.target.value)
    }

    const handleSubmit = () => {
        let newPlaylist = {
            name:playlistName,
            createdAt:createdAt(),
            id:uuidv4(),
            songs:[]
        }
        setOpen(false);
        dispatch(createPlaylist(newPlaylist))
        setPlaylistName('')
    }

    useEffect(() => {
        if(playlistState.length > 0){
            localStorage.setItem("playlists",JSON.stringify(playlistState))
            setPlaylist(playlistState)
        }else if(localStorage?.playlists){
          let playlists = JSON.parse(localStorage?.playlists)
          if(playlists?.length > 0){
            dispatch(localStorageCreatePlaylist(playlists))
          }
        }
        // eslint-disable-next-line
      }, [playlistState])

    const classes = useStyles();
    return (
        <div>
            <Fab variant="extended" onClick={handleClickOpen}>
                <AddIcon className={classes.extendedIcon} />
                 {ADD_PLAYLIST}
            </Fab>
            <PlaylistCard data={playList}/>
            <Modal open={open} handleClose={handleClose} value={playlistName} onChange={handleChange} onClick={handleSubmit}/>
        </div>
    )
}
