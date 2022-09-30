import React from 'react';
import {useDispatch} from "react-redux";
import {Typography} from "@mui/material";
import AddNewPost from "../../components/AddNewPost/AddNewPost";
import {createPost} from "../../store/actions/postsActions";

const NewPost = () => {
    const dispatch = useDispatch();

    const onPostFormSubmit = async postData => {
        await dispatch(createPost(postData));
    };

    return (
        <>
            <Typography
                textAlign="center"
                marginBottom="20px"
                variant="h4"
            >
                New post
            </Typography>
            <AddNewPost onSubmit={onPostFormSubmit}/>
        </>
    );
};

export default NewPost;