import React, { useEffect, useState } from 'react'
import PostList from './PostList';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const Posts = () => {
  const [data, setData] = useState([]);

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  // Unique UserId List
  const uniqueUserList = data.map(item => item.userId).filter((userId, index, self) => self.indexOf(userId) === index)

  // Another Method for Unique UserId List
  // [...new Set(data.map(item => item.userId))]

  useEffect(() => {
    fetch(POSTS_URL).then(res => {
      return res.json()
    }).then((data) => {
      setData([...data])
      // setUsers([...new Set(data.map(item => item.userId))])
      setPosts(data.filter(post => post.userId === 1))
    }).catch(err => {
      return err.message;
    })

    fetch(USERS_URL).then(res => {
      return res.json()
    }).then(data => {
      setUsers([...data])
    }).catch(err => {
      return err.message;
    })
  }, [])

  const handlePosts = (userId) => {
    setPosts(data.filter(post => post.userId === userId))
  }
  return (
    <div style={{display:'flex', gap: '50px'}}>
      <div style={{display: 'flex', flexDirection: 'column', gap:"1rem"}}>
        {
          users.map((user) => {
            return <div style={{cursor: "pointer"}} key={user.id} onClick={() => handlePosts(user.id)}>{user.id} {user.name}</div>
          })
        }
      </div>
      <PostList posts={posts}/>
    </div>
  )
}

export default Posts