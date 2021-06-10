import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { COMPOENTS_HEADER_TITLE_TEXT } from '../../constants'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
    },
    backgroundColor: {
        backgroundColor: '#d23918'
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <AppBar className={classes.backgroundColor}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>{COMPOENTS_HEADER_TITLE_TEXT}</Typography>
            </Toolbar>
        </AppBar>
    );
}


