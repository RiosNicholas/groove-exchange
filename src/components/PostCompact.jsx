const PostCompact = ({ title, numUpvotes, timePosted }) => {
    return (
        <div className="bg-white text-black rounded m-2">
            <p>Posted {timePosted} ago</p>
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="font-light">{numUpvotes} upvotes</p>
        </div>
    );
}

export default PostCompact;