import { useState, useEffect } from "react";
import { supabase } from "../client";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditPostForm = ({ initialValues }) => {
    const { index } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetches existing data on post being edited 
        const fetchPostData = async () => {
            try {
                const { data, error } = await supabase
                    .from("Posts")
                    .select()
                    .eq("id", index)
                    .single();

                if (error) {
                    console.error(error);
                    navigate("/", { replace: true });
                    return;
                }

                if (data) {
                    setTitle(data.title || '');
                    setDescription(data.description || '');
                    setImageUrl(data.image_url || '');
                }
            } catch (error) {
                console.error(error);
            }
        };

        if (index) {
            fetchPostData();
        }
    }, [index, navigate]);


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

        navigate(-1);
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
                className="text-sm text-neutral-700 font-light mx-1 mb-2 w-24 hover:underline hover:text-neutral-800"
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

            <div className="flex p-1 mt-5 w-full justify-center items-center text-center transition">
                <button type="submit" onClick={handleEdits} className="rounded flex-grow m-2 bg-lime-600 text-white font-bold uppercase hover:bg-lime-700">
                    Confirm Changes
                </button>
                <button type="submit" onClick={handleDelete} className="rounded flex-grow m-2 bg-red-700 text-neutral-100 font-bold uppercase hover:bg-red-800">
                    Delete Post
                </button>
            </div>
        </form>
    );
};

export default EditPostForm;
