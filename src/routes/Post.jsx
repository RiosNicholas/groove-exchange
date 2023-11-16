import { supabase } from "../client";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PostDetailed from "../components/PostDetailed";
import { formatDistanceToNow } from 'date-fns';

const Post = () => {
  const navigate = useNavigate();
  const { index } = useParams();

  const [postData, setPostData] = useState({
    title: "",
    description: "",
    image_url: "",
    comments: [],
    num_upvotes: 0,
    created_at: null,
  });

  useEffect(() => {
    const fetchedData = async () => {
      const { data, error } = await supabase
        .from("Posts")
        .select()
        .eq("id", index)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }

      if (data) {
        setPostData(data);
      }
    };

    fetchedData();
  }, [index, navigate]);

  return (
    <>
      <PostDetailed
        numUpvotes={postData.num_upvotes}
        timePosted={formatDistanceToNow(new Date(postData.created_at), { addSuffix: true }) || 'less than 1 minute ago'}
      />
    </>
  );
};

export default Post;
