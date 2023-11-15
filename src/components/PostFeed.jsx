import { useState, useEffect } from "react";
import { Routes, Route, useRoutes, Link } from "react-router-dom";
import { supabase } from '../client'
import FeedFilter from "./FeedFilter";
import PostCompactList from "./PostListCompact";
import PostDetailed from "../routes/PostDetailed";

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
    
    const handlePostClick = (index) => {
        const selectedPost = posts[index];
        setSelectedPost(selectedPost);
    };

    return (
        <main className="mx-5 lg:mx-32">
            <FeedFilter />
            <Routes>
                <Route
                    path="/"
                    element={<PostCompactList posts={posts} />}
                />
                <Route path="/post/:id" element={<PostDetailed />} />
            </Routes>
        </main>
    );
}

export default PostFeed;