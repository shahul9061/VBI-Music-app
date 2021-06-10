import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { filterSongs } from '../../actions'
import { SONGS_SEARCH_DESC } from "../../constants";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: '30px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 26,
        textAlign: 'center'
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Search() {
    const classes = useStyles();
    const [value,setValue] = useState('')
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value)
        dispatch(filterSongs(e.target.value))
    }

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} variant="h5" component="h6" gutterBottom>
                  <i className="fas fa-music" /> {SONGS_SEARCH_DESC}
                </Typography>
                <TextField
                    id="outlined-full-width"
                    style={{ margin: 8 }}
                    placeholder="Song name..."
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={value}
                    onChange={handleChange}
                    variant="outlined"
                 />
            </CardContent>
        </Card>
    );
}
