/* eslint-disable */
import { GET_SONGS,FILTER_SONGS,LOCAL_STORAGE_CREATE_PLAYLIST,CREATE_PLAYLIST,ADD_SONG_TO_PLAYLIST } from "../actions/Types";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  songs: null,
  playlists: [],
  filtered: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songs: action.payload
      };
    case FILTER_SONGS:
      return {
        ...state,
        filtered: state.songs.filter(song => {
            const regex = new RegExp(`${action.payload}`, 'gi');
            return song.title.match(regex);
          })
        };
    case CREATE_PLAYLIST:
      localStorage.setItem("playlists",JSON.stringify([...state.playlists, action.payload]))
      return {
        ...state,
        playlists: [...state.playlists, action.payload]
        };
    case LOCAL_STORAGE_CREATE_PLAYLIST:
      return {
        ...state,
        playlists: action.payload
      }
    case ADD_SONG_TO_PLAYLIST:
      let songObj = action.payload.song
      songObj = {...songObj ,...{ "songId" :  uuidv4()}}
      return {
        ...state,
        playlists: state.playlists.map((playlist) => 
            (playlist.name === action.payload.name ? (playlist.songs =[...playlist.songs,songObj]) : playlist.songs , playlist)
          )
        };
    default:
      return state;
  }
}
