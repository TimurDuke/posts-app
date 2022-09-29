import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPost} from "../../store/actions/postsActions";
import PostItem from "../../components/PostItem/PostItem";
import {fetchComments} from "../../store/actions/commentsActions";
import ShowComments from "../../components/ShowComments/ShowComments";

const ShowPost = ({match}) => {
    const dispatch = useDispatch();
    const post = useSelector(state => state.posts.post);
    const comments = useSelector(state => state.comments.comments);

    useEffect(() => {
        dispatch(fetchPost(match.params.id));
        dispatch(fetchComments(match.params.id));
    }, [dispatch, match.params.id]);

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

        </div>
    );
};

export default ShowPost;