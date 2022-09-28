import React from 'react';
import {Link} from "react-router-dom";
import {AppBar, Grid, Toolbar, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import Anonymous from "./Menu/Anonymous";
import UserMenu from "./Menu/UserMenu";

const AppToolBar = () => {
    // const user = useSelector(state => state.users.user);

    return (
        <>
            <AppBar sx={{padding: '10px 15px', background: '#69c897'}}>
                {/*<ToastContainer/>*/}
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
                        <Anonymous/>
                    </Grid>
                </Grid>
            </AppBar>
            <Toolbar/>
        </>
    );
};

export default AppToolBar;