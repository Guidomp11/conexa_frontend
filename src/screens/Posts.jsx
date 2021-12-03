import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import PostsTable from '../components/posts/PostsTable';
import { requestPosts } from '../redux/actions/listingActions';

import './screens.css';

const Posts = () => {

    const { posts } = useSelector(state => state.listing);
    const dispatch = useDispatch();

    useEffect(() => dispatch(requestPosts()), [])

    return (
        <div className="posts">
            <PostsTable posts={posts} />
        </div>
    );
}
 
export default Posts;