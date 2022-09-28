import React from 'react';
import {Link} from "react-router-dom";
import {Box, Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import {apiUrl} from "../../config";
import './PostsList.css';

const PostsList = (props) => {
    return (
        <Card variant="outlined" sx={{ width: 600, margin: '10px auto' , display: 'flex'}}>
            <Box sx={{height: 180, width: 200, display: "flex", alignItems: 'center', justifyContent: 'center', borderRight: '1px solid lightgrey'}}>
                {props.image ?
                    <CardMedia
                        component="img"
                        alt="post"
                        height="180px"
                        width="100px"
                        image={apiUrl + '/' + props.image}
                    /> :
                    <ForumRoundedIcon sx={{fontSize: 70}}/>
                }
            </Box>
            <CardContent>
                <Typography variant="body2" color="text.secondary" paddingLeft={1}>
                    <b>{props.author}</b> at {new Date(props.datetime).toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}
                </Typography>
                <Button type="button">
                    <Link
                        to={'/posts/' + props.id}
                        color="inherit"
                        underline="hover"
                    >
                        {props.title}
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
};

export default PostsList;