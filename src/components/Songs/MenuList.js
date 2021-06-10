import React,{useState,useEffect} from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useSelector,useDispatch } from 'react-redux';
import { addSongToPlaylist } from '../../actions'
import Modal from "./Modal";
import { SONGS_MENU_ITEM_ADD } from "../../constants";

const ITEM_HEIGHT = 40;

export default function MenuList({songData}) {

  let dispatch = useDispatch()
  let state = useSelector(state => state?.data?.playlists) 

  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [playlists,setPlaylists] = useState([])
  const [playlist,setPlaylist] = useState();
  const [song] = useState(songData)

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenModal(true)
  };

  const handleOutsideClickClose = () => {
    setAnchorEl(null);
  }

  const handleModalClose = () => {
    setOpenModal(false)
  }

  const handlePlaylistChange = (e) => {
    setPlaylist(e.target.value)
  }

  const handleSubmit = () => {
    setOpenModal(false)
    dispatch(addSongToPlaylist(playlist,song))
  }

  useEffect(() => {
    if(state?.length > 0){
        setPlaylists(state)
    }
  }, [state])

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleOutsideClickClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch"
          }
        }}
      >
        <MenuItem onClick={handleClose}>{SONGS_MENU_ITEM_ADD}</MenuItem>
      </Menu>
      <Modal open={openModal} handleModalClose={handleModalClose} value={playlist} handleSubmit={handleSubmit} handlePlaylistChange={handlePlaylistChange} playlists={playlists}/>
    </div>
  );
}
