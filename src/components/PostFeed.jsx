import { useState, useEffect } from "react";
import { useRoutes, Link } from 'react-router-dom'
import { supabase } from '../client'
import FeedFilter from "./FeedFilter";
import PostCompact from "./PostCompact";

const PostFeed = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState(false);
  
    if(token){
        sessionStorage.setItem('token',JSON.stringify(token))
    }
    
    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
                .from('Posts')
                .select()
                .order('created_at', { ascending: true })
      
            setPosts(data);
            };
      
            if(sessionStorage.getItem('token')){
                let data = JSON.parse(sessionStorage.getItem('token'));
                setToken(data);
            };
      
          fetchPosts();
    }, []);
    

    return (
        <main className="mx-5 lg:mx-32">
            <FeedFilter />
            <PostCompact 
                title={'Thoughts on the new Earl Sweatshirt album?'} 
            />
            <PostCompact 
                title={'Hidden Gem Alert: My favorite underground band'} 
            />
            <PostCompact 
                title={'Artist appreciation thread: Elliott Smith'} 
            />
        </main>
    );
}

export default PostFeed;