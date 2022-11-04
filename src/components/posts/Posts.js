import { useState, useEffect } from 'react';
import { posts } from 'aleph-js'

import Post from './Post';


function Posts(props) {

  const [loadedPosts, setLoadedPosts] = useState([])
  
  const loadPosts = async () => {
    const response = await posts.get_posts('chat',{'refs':['hall']})
    setLoadedPosts(response.posts)
  }

  useEffect(() => {
    loadPosts()
  },[])

  return (
    <div className="posts">
      {
        loadedPosts.map( post => <Post key={post.item_hash} post={post}/>)
      }      
    </div>
  );
}

export default Posts;
