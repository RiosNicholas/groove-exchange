import { useState, useEffect } from "react";
import { supabase } from "../client";

const CreatePostForm = ({ onSubmit, initialValues }) => {
    const [post, setPost] = useState({
        title: '',
        imageUrl: '',
        description: '', 
        likes: 0,
        comments: []
    })

    const createPost = async (event) => {
        event.preventDefault();
        const { error } = await supabase
            .from("Posts")
            .insert({
                title: post.title,
                image: post.image,
                description: post.description,
                likes: post.likes,
                comments: post.comments,
            })
            .select();
            if (error) {
                console.log(error);
            }
            window.location = "/";
        };


        const handleChange = (event) => {
            const { name, value } = event.target;
            setPost((prev) => {
                return {
                    ...prev,
                    [name]: value,
                };
            });
    }; 

    return (
        <form className="flex flex-col mx-7 my-2 p-4 text-lg bg-neutral-200 text-black font-bold rounded lg:mx-32">
            <label className="m-1">
                Title: 
                <input
                    className="bg-white font-normal rounded p-1 mx-1 w-full text-base"
                    type="text"
                    value={post.title}
                    onChange={handleChange}
                    required
                />
            </label>

            <label className="m-1">
                Description:
                <textarea
                    className="bg-white font-normal rounded p-1 mx-1 w-full text-base"
                    value={post.description}
                    onChange={handleChange}
                    required
                />
            </label>

            <label className="m-1 italic font-normal text-neutral-800">
                <i>Image URL (optional):</i>
                <input
                    className="bg-white w-full font-normal rounded p-1 mx-1 text-base"
                    type="text"
                    value={post.imageUrl}
                    onChange={handleChange}
                />
            </label>

            <button type="submit" onClick={createPost} className="mx-5 mt-5 mb-2 rounded bg-lime-600 text-white font-bold uppercase">
                Create Post
            </button>
        </form>
    );
};

export default CreatePostForm;
