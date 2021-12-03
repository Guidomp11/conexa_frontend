import React from 'react';
import './table.css';

const PostsTable = ({posts}) => {
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>Texto</th>
            </tr>
            
            {
                posts && posts.map((post, idx) => (
                    <tr key={post.id + idx}>
                        <td>{post.id }</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                ))
            }
            
        </table>
    );
}
 
export default PostsTable;