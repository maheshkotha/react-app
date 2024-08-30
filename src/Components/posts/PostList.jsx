import React from 'react'
import { Link } from 'react-router-dom';


const PostList = ({posts}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>{
        posts.map((post) => {
          return (
            <div key={post.id}>
              - {post.id}--{post.title}
              <Link to={`post/${post.id}`}>View Post</Link>
            </div>
          )
        })
      }</div>
  )
}

export default PostList