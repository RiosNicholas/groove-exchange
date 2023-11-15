import { useState } from "react";
import { Link } from "react-router-dom";

const PostCompact = ({ title, numUpvotes, timePosted, id }) => {
    const [upvotes, setUpvotes] = useState(0);

    const handleUpvote = () => {
        setUpvotes(upvotes + 1);
    };

    const handleDownvote = () => {
        setUpvotes(upvotes - 1);
    };

    return (
        <div className="bg-neutral-100 text-black rounded flex items-center p-5 m-2">
            <aside className="flex flex-col mr-4 ">
                <button onClick={handleUpvote} className="hover:bg-neutral-200 bg-neutral-100">
                    <span role="img" aria-label="upvote">👍</span>
                </button>
                <button onClick={handleDownvote} className="hover:bg-neutral-200 bg-neutral-100">
                    <span role="img" aria-label="downvote">👎</span>
                </button>
            </aside>
            <Link to={`/post/${id}`}>
                <p className="text-neutral-700 text-sm font-light">Posted {timePosted} ago</p>
                <h2 className="font-extrabold text-xl mb-1">{title}</h2>
                <p className="text-neutral-700 font-normal text-base">{upvotes} upvotes</p>
            </Link>
        </div>
    );
}

export default PostCompact;