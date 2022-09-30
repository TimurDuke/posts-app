import React from 'react';
import {Link} from "react-router-dom";
import {AppBar, Grid, Toolbar, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

import Anonymous from "./Menu/Anonymous";
import UserMenu from "./Menu/UserMenu";

const AppToolBar = () => {
    const user = useSelector(state => state.users.user);

    return (
        <>
            <AppBar sx={{padding: '11px 15px', background: '#18453b'}}>
                <ToastContainer/>
                <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item>
                        <Typography
                            component={Link}
                            to='/'
                            sx={{textDecoration: 'none', color: '#fff'}}
                            variant='h4'
                        >
                            Forum
                        </Typography>
                    </Grid>
                    <Grid item>
                        {user ? <UserMenu user={user}/> : <Anonymous/>}
                    </Grid>
                </Grid>
            </AppBar>
            <Toolbar/>
        </>
    );
};

export default AppToolBar;