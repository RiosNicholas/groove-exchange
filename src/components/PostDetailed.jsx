import { useState } from "react";

const PostDetailed = ({ title, description, numUpvotes, timePosted, imgUrl, comments }) => {
    const [upvotes, setUpvotes] = useState(0);

    const handleUpvote = () => {
        setUpvotes(upvotes + 1);
    };

    const handleDownvote = () => {
        setUpvotes(upvotes - 1);
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
                <p className="text-neutral-700 text-sm font-light mb-1">Posted {timePosted} ago</p>
                <h2 className="font-extrabold text-2xl">{title}Title</h2>
                <p className="text-lg">{description}description</p>
                <img 
                    src={imgUrl} 
                    className="max-w-lg mb-1"
                />
                <p className="text-neutral-700 font-normal text-base">{upvotes} upvotes</p>
            </main>
            </div>
            <div className="flex flex-col bg-neutral-500 px-8 p-2">
                <ul className="list-disc list-inside">
                    <li>{comments}comment</li>
                </ul>
                <input 
                    placeholder="Leave a comment..."
                    className="m-2 bg-white text-black p-1 rounded text-sm w-full overflow-y-auto max-h-32"
                />
            </div>
        </div>
    );
}

export default PostDetailed;