import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPost} from "../../store/actions/postsActions";
import PostItem from "../../components/PostItem/PostItem";
import {createComment, fetchComments} from "../../store/actions/commentsActions";
import ShowComments from "../../components/ShowComments/ShowComments";
import FormElement from "../../components/UI/Form/FormElement/FormElement";
import ButtonWithProgress from "../../components/UI/ButtonWithProgress/ButtonWithProgress";

const ShowPost = ({match}) => {
    const dispatch = useDispatch();
    const post = useSelector(state => state.posts.post);
    const comments = useSelector(state => state.comments.comments);
    const user = useSelector(state => state.users.user);
    const loading = useSelector(state => state.comments.loading);

    const [comment, setComment] = useState({text: ''});

    const postId = match.params.id;
    useEffect(() => {
        dispatch(fetchPost(postId));
        dispatch(fetchComments(postId));
    }, [dispatch, postId]);

    const onCommentChange = e => {
        setComment(e.target.value);
    };

    const onCommentSubmit = async e => {
        e.preventDefault();

        if (comment.text) {
            await dispatch(createComment({...comment, post: postId}));
            dispatch(fetchComments(postId));
        }
    };

    return post && (
        <div className="ShowPost">
            <PostItem
                author={post.user.username}
                title={post.title}
                image={post.image}
                description={post.description}
                datetime={post.datetime}
            />
            <h4> Comments </h4>
            {comments.map(comment => (
                <ShowComments
                    key={comment._id}
                    author={comment.user.username}
                    datetime={comment.datetime}
                    text={comment.text}
                />
            ))}
            {user &&
                <form className="CommentForm" onSubmit={onCommentSubmit}>
                    <FormElement
                        type='text'
                        name='text'
                        value={comment.text}
                        onChange={onCommentChange}
                        label='Add Your comment...'
                    />
                    <ButtonWithProgress
                        loading={loading}
                        disabled={loading}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="success"
                    >
                        Send
                    </ButtonWithProgress>
                </form>
            }
        </div>
    );
};

export default ShowPost;