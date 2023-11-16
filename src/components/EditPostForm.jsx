import { useState, useEffect } from "react";
import { supabase } from "../client";
import { Link, useNavigate } from "react-router-dom";

const EditPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState('');
    const [post, setPost] = useState({title: "", description: "", image: "", upvotes: 0})
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

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
                image_url: card.image, 
            })
            .select()

            if (error) {
                console.log(error);
            }

        window.location = "/create";
    }
    const handleEdits = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from("Posts")
            .update({ title, imageUrl, description })
            .eq("id", index)
            .select();

        console.log(index, title);
    };

    const toggleEditMode = async (e) => {
        setIsEditing(!isEditing);
    };

    const handleDelete = async () => {
        const { data, error } = await supabase
            .from("Posts")
            .delete()
            .eq("id", index)
            .select();

        navigate("/");
    };


    return (
        <form onSubmit={handleSubmit} className="flex flex-col mx-7 my-2 px-4 pt-6 pb-3 text-lg bg-neutral-200 text-black font-bold rounded lg:mx-32">
            <Link 
                to="#"
                onClick={() => navigate(-1)}
                className="text-sm text-neutral-700 font-light mx-1 mb-2 w-24 hover:underline hover:text-neutral-600"
            >
                Back to post
            </Link>
            <label className="m-1 text-xl">
                Title: 
                <input
                    className="bg-white font-normal rounded p-1 mx-1 w-full text-base"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>

            <label className="m-1 text-xl">
                Description:
                <textarea
                    className="bg-white font-normal rounded p-1 mx-1 w-full text-base"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>

            <label className="m-1 italic text-xl font-normal text-neutral-800">
                <i>Image URL (optional):</i>
                <input
                    className="bg-white w-full font-normal rounded p-1 mx-1 text-base"
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            </label>

            <div className="flex p-1 mt-5 w-full justify-center items-center">
                <button type="submit" onClick={createPost} className="rounded flex-grow m-2 bg-lime-600 text-white font-bold uppercase">
                    Edit Post
                </button>
                <button type="submit" onClick={createPost} className="rounded flex-grow m-2 bg-red-700 text-neutral-100 font-bold uppercase">
                    Delete Post
                </button>
            </div>
        </form>
    );
};

export default EditPostForm;
