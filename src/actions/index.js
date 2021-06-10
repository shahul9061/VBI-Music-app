import { GET_SONGS,FILTER_SONGS,CREATE_PLAYLIST,LOCAL_STORAGE_CREATE_PLAYLIST,ADD_SONG_TO_PLAYLIST } from './Types';
import {baseURL} from '../utils/AxiosConfiguration'
import { mergeById } from '../utils'

export const getSongs = () => async (dispatch) => {

  try {
    const res1 = await baseURL.get('/albums');
    const res2 = await baseURL.get('/photos?_limit=100')

    let arr1 = res1.data
    let arr2 = res2.data

    let result = await mergeById(arr1,arr2)

    dispatch({
      type: GET_SONGS,
      payload: result
    });

  } catch (error) {
    console.log(`GET SONGS ERROR${error}`);
  }

};

export const filterSongs = (data) => (dispatch) => {

  try {
    dispatch({
      type: FILTER_SONGS,
      payload: data
    });

  } catch (error) {
    console.log(`FILTER SONGS ERROR${error}`);
  }

};

export const createPlaylist = (data) => (dispatch) => {
  try {
    dispatch({
      type: CREATE_PLAYLIST,
      payload: data
    });
  } catch (error){
    console.log(`CREATE PLAYLIST ERROR${error}`);
  }
}

export const localStorageCreatePlaylist = (data) => (dispatch) => {
  try {
    dispatch({
      type: LOCAL_STORAGE_CREATE_PLAYLIST,
      payload: data
    });
  } catch (error){
    console.log(`LOCAL STORAGE CREATE PLAYLIST ERROR${error}`);
  }
}

export const addSongToPlaylist = (name,song) => (dispatch) => {
  try{
    dispatch({
      type: ADD_SONG_TO_PLAYLIST,
      payload: {name,song}
    });
  }catch(error){

  }
}