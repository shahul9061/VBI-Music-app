import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import {localStorageCreatePlaylist} from '../../actions'
import CardsContainer from './CardsContainer';
import Search from './Search';

const Songs = () => {
  const dispatch = useDispatch()
  const songsState = useSelector((state) => state?.data?.songs);
  const filteredSongsState = useSelector((state)=> state?.data?.filtered)
  const [songs,setSongs] = useState(null)
  const [filtered,setFiltered] = useState(null)

  useEffect(() => {
    setSongs(songsState)
  }, [songsState]);

  useEffect(()=>{
    setFiltered(filteredSongsState)
  },[filteredSongsState])

  useEffect(() => {
    if(localStorage?.playlists){
      dispatch(localStorageCreatePlaylist(JSON.parse(localStorage?.playlists)))
  } 
// eslint-disable-next-line
  }, [])

  return (
    <div>
        <Search />
        {filtered !== null
            ? <CardsContainer songs={filtered}/>
            : <CardsContainer songs={songs}/>
            }
    </div>
  )
}


export default Songs;