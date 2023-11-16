import { supabase } from "../client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostDetailed = ({ numUpvotes, timePosted }) => {
    const { index } = useParams();
    const [upvotes, setUpvotes ] = useState(numUpvotes);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [comments, setComments] = useState([]);
    const [createdComment, setCreatedComment] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [createdAt, setCreatedAt] = useState(timePosted);
    const navigate = useNavigate();

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
                setTitle(data.title);
                setDescription(data.description);
                setImageUrl(data.image_url);
                setComments(data.comments);
                setUpvotes(data.num_upvotes);
                setCreatedAt(data.created_at); 
            }
        };
        fetchedData();
    }, [index, navigate]);
    
    const handleDelete = async () => {
        const { data, error } = await supabase
            .from("Posts")
            .delete()
            .eq("id", index)
            .select();

        navigate("/");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const trimmedComment = createdComment.trim();

        // Skip if the comment is empty
        if (trimmedComment === '') {
            return; 
        }
    
        // Handling cases with null comments
        const updatedComments = (comments || []).concat(trimmedComment);
    
        const { data, error } = await supabase
            .from("Posts")
            .update({ comments: updatedComments })
            .eq("id", index);
    
        if (error) {
            console.error(error);
        }
    
        setComments(updatedComments);
        setCreatedComment(""); // Clears the input after submitting
    };


    const handleUpvote = async (e) => {
        e.preventDefault();
        await supabase
            .from("Posts")
            .update({ num_upvotes: upvotes + 1 })
            .eq("id", index);

        setUpvotes((upvotes) => upvotes + 1);
    };

    const handleDownvote = async (e) => {
        e.preventDefault();
        await supabase
            .from("Posts")
            .update({ num_upvotes: upvotes - 1 })
            .eq("id", index);

        setUpvotes((upvotes) => upvotes - 1);
    };

    return (
        <div className="bg-neutral-100 mx-7 my-2 rounded">
            <div className="flex items-center ">
            <aside className="flex flex-col  text-2xl">
                <button onClick={handleUpvote} className="hover:bg-neutral-200 bg-neutral-100">
                    <span role="img" aria-label="upvote">👍</span>
                </button>
                <button onClick={handleDownvote} className="hover:bg-neutral-200 bg-neutral-100">
                    <span role="img" aria-label="downvote">👎</span>
                </button>
            </aside>
            <main className="bg-neutral-100 text-black rounded py-5 px-1 my-4">
                <p className="text-neutral-700 text-sm font-light mb-1">Posted {createdAt}</p>
                <h2 className="font-extrabold text-2xl">{title}</h2>
                <p className="text-lg">{description}</p>
                <img 
                    src={imageUrl} 
                    className="max-w-lg mb-1"
                />
                <p className="text-neutral-700 font-normal text-base">{upvotes} upvotes</p>
            </main>
            </div>
            <div className="flex flex-col bg-neutral-500 px-8 p-2">
                <form onSubmit={handleSubmit}>
                    <h2 className="font-bold text-lg">Comments</h2>
                    <textarea 
                        placeholder="Leave a comment..."
                        className="m-2 bg-white text-black p-1 rounded text-sm w-full overflow-y-auto max-h-32"
                        value={createdComment}
                        onChange={(e) => setCreatedComment(e.target.value)}
                        />
                    <div className="flex">
                        <button type="submit" className="m-2 bg-lime-600 text-white font-bold">
                            Comment
                        </button>
                    </div>
                </form>
                <ul className="list-disc list-inside">
                    {Array.isArray(comments) && comments.reverse().map((comment, i) => (
                        <li key={i}>{comment}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PostDetailed;