import { useState, useEffect } from "react";
import { Routes, Route, useRoutes, Link } from "react-router-dom";
import { supabase } from '../client'
import FeedFilter from "./FeedFilter";
import PostCompactList from "./PostCompactList";
import PostDetailed from "./PostDetailed";

const PostFeed = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState(false);
  
    if(token){
        sessionStorage.setItem('token',JSON.stringify(token))
    }
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data, error } = await supabase
                    .from('Posts')
                    .select()
                    .order('created_at', { ascending: false });
            
                if (error) {
                    console.error('Error fetching data:', error);
                } else {
                    setPosts(data);
                }
            } catch (error) {
                console.error('Error in fetchPosts:', error);
            }
        }; 
      
        if(sessionStorage.getItem('token')){
            let data = JSON.parse(sessionStorage.getItem('token'));
            setToken(data);
        };

        console.log(posts)
        fetchPosts();
    }, []);
    
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