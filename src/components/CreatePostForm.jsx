import { useState, useEffect } from "react";
import { supabase } from "../client";

const CreatePostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState('');
    const [post, setPost] = useState({title: "", description: "", image: "", upvotes: 0})
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        // Used for editing existing post
        if (initialValues) {
            setTitle(initialValues.title || '');
            setDescription(initialValues.description || '');
            setImageUrl(initialValues.imageUrl || '');
        }
    }, [initialValues]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            title,
            description,
            imageUrl,
        };
        onSubmit(formData);
    };


    const createPost = async (event) => {
        event.preventDefault();
        const { error } = await supabase
            .from('Posts')
            .insert({
                title: card.title, 
                description: card.description, 
                image: card.image, 
                upvotes: card.upvotes, 
                username: userName, 
                creatorID: userID
            })
            .select()

            if (error) {
                console.log(error);
            }

        window.location = "/create";
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col mx-7 my-2 p-4 text-lg bg-neutral-200 text-black font-bold rounded lg:mx-32">
            <label className="m-1">
                Title: 
                <input
                    className="bg-white font-normal rounded p-1 mx-1 w-full text-base"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>

            <label className="m-1">
                Description:
                <textarea
                    className="bg-white font-normal rounded p-1 mx-1 w-full text-base"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>

            <label className="m-1 italic font-normal text-neutral-800">
                <i>Image URL (optional):</i>
                <input
                    className="bg-white w-full font-normal rounded p-1 mx-1 text-base"
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            </label>

            <button type="submit" onClick={createPost} className="mx-5 mt-5 mb-2 rounded bg-lime-600 text-white font-bold uppercase">
                Create Post
            </button>
        </form>
    );
};

export default CreatePostForm;