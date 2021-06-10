import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from "react-router-dom";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Box from '@material-ui/core/Box';
import Header from '../../components/Header';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
     backgroundColor:{
         backgroundColor:'#8F2A8B',
         color: 'white',
         "&:hover": {
            color: '#8F2A8B'
          }
     }
}));

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function Layout(props) {
    const { component: Component, ...rest } = props
    const classes = useStyles();
    return (
        
        <Route
        {...rest}
        render={(matchProps) => (
        <>
       <React.Fragment>
            <CssBaseline />
            <Header/>
            <Toolbar id="back-to-top-anchor" />
            <Container>
            <Box my={4} m={2}>
                <Component {...matchProps} />
            </Box>
            </Container>
            <ScrollTop {...props}>
                <Fab  className={classes.backgroundColor} size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
        </>

        )}
    />
    );
}


