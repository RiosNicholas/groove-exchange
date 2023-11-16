import { supabase } from "../client";
import { useState } from "react";
import { Link } from "react-router-dom";

const PostCompact = ({ title, numUpvotes, timePosted, id }) => {
    const [upvotes, setUpvotes] = useState(numUpvotes);

    const handleUpvote = async () => {
        try {
            // Save the upvote in Supabase
            await supabase
                .from("Posts")
                .update({ num_upvotes: upvotes + 1 })
                .eq("id", id);

            // Update the local state
            setUpvotes((prevUpvotes) => prevUpvotes + 1);
        } catch (error) {
            console.error('Error updating upvote:', error);
        }
    };

    const handleDownvote = async () => {
        try {
            // Save the downvote in Supabase
            await supabase
                .from("Posts")
                .update({num_upvotes: upvotes - 1 })
                .eq("id", id);

            // Update the local state
            setUpvotes((prevUpvotes) => prevUpvotes - 1);
        } catch (error) {
            console.error('Error updating downvote:', error);
        }
    };

    const handleLinkClick = (e) => {
        e.preventDefault();
    };

    return (
        <div className="bg-neutral-100 text-black rounded flex items-center p-5 m-2">
            <aside className="flex flex-col mr-4">
                <button onClick={handleUpvote} className="hover:bg-neutral-200 bg-neutral-100">
                    <span role="img" aria-label="upvote">👍</span>
                </button>
                <button onClick={handleDownvote} className="hover:bg-neutral-200 bg-neutral-100">
                    <span role="img" aria-label="downvote">👎</span>
                </button>
            </aside>
            <Link to={`/post/${id}`}>
                <p className="text-neutral-700 text-sm font-light">Posted {timePosted}</p>
                <h2 className="font-extrabold text-xl mb-1">{title}</h2>
                <p className="text-neutral-700 font-normal text-base">{upvotes} upvotes</p>
            </Link>
        </div>
    );
}

export default PostCompact;