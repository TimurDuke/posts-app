import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Grid, Typography} from "@mui/material";
import {fetchPosts} from "../../store/actions/postsActions";
import Spinner from "../../components/UI/Spinner/Spinner";
import PostsList from "../../components/PostsList/PostsList";
import {Link} from "react-router-dom";

const PostsPage = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const loading = useSelector(state => state.posts.loading);
    const user = useSelector(state => state.users.user);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <Grid container direction="column" spacing={2} >
            <Grid item container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="h5">
                        Posts
                    </Typography>
                </Grid>
                {user &&
                <Grid item>
                    <Button color='success' component={Link} to='/posts/new'>
                        Add
                    </Button>
                </Grid> }
            </Grid>

            {loading
                ? <Spinner/>
                : <div className="List">
                    {posts.map(post => (
                        <PostsList
                            key={post._id}
                            id={post._id}
                            author={post.user.username}
                            title={post.title}
                            image={post.image}
                            datetime={post.datetime}
                            commentsCount={post.commentsCount}
                        />
                    ))}
                </div>
            }
        </Grid>

    );
};

export default PostsPage;