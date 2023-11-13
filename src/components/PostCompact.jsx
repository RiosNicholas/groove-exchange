import { useState } from "react";

const PostCompact = ({ title, numUpvotes, timePosted }) => {
    const [upvotes, setUpvotes] = useState(numUpvotes);
    return (
        <div className="bg-neutral-100 text-black rounded p-5 m-2">
            <p className="text-neutral-700 text-sm font-light">Posted {timePosted} ago</p>
            <h2 className="font-extrabold text-xl mb-1">dd{title}</h2>
            <p className="text-neutral-700 font-normal text-base">{numUpvotes} upvotes</p>
        </div>
    );
}

export default PostCompact;