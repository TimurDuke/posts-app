import React from 'react';
import {Typography} from "@mui/material";
import './ShowComments.css';

const ShowComments = (props) => {
    return (
        <div className="Comment">
            <Typography variant="p" color="text.secondary">
                <b>{props.author}</b>:   {props.text}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {new Date(props.datetime).toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}
            </Typography>
        </div>
    );
};

export default ShowComments;