import React from 'react';
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import {apiUrl} from "../../config";
import './PostItem.css';

const PostItem = (props) => {
    return (
        <div className="PostItem">
            <Card variant="outlined" sx={{ maxWidth: 900, display: 'flex',}}>
                <Box sx={{height: 250, width: 250, display: "flex", alignItems: 'center', justifyContent: 'center', borderRight: '1px solid lightgrey'}}>
                    {props.image ?
                        <CardMedia
                            component="img"
                            alt="post"
                            height="250px"
                            width="250px"
                            image={apiUrl + '/' + props.image}
                        /> :
                        <ForumRoundedIcon sx={{fontSize: 70}}/>
                    }
                </Box>
                <CardContent>
                    <Typography variant="body2" color="text.secondary" paddingLeft={1}>
                        <b>{props.author}</b> at {new Date(props.datetime).toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}
                    </Typography>
                    <Typography variant="h5" color="text.secondary" paddingLeft={1}>
                        {props.title}
                    </Typography>
                    <Typography variant="p" color="text.secondary" paddingLeft={1}>
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default PostItem;