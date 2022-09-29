import React from 'react';
import {Container, CssBaseline} from "@mui/material";
import AppToolBar from "../AppToolBar/AppToolBar";

const Layout = ({children}) => {
    return (
        <>
            <CssBaseline/>
            <AppToolBar/>
            <main>
                <Container maxWidth="xl" sx={{background: '#abccba', minHeight: '90vh', paddingY: '20px'}}>
                    {children}
                </Container>
            </main>
        </>
    );
};

export default Layout;