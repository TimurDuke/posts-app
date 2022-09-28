import React from 'react';
import {Container, CssBaseline} from "@mui/material";

const Layout = ({children}) => {
    return (
        <>
            <CssBaseline/>
            <main>
                <Container maxWidth="xl" sx={{background: '#abccba'}}>
                    {children}
                </Container>
            </main>
        </>
    );
};

export default Layout;