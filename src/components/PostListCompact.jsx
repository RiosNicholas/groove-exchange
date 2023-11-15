import PostCompact from "./PostCompact";

const PostCompactList = ({ posts }) => {
    return (
        <div className="PostCompactList">
            {posts.map((post, index) => (
                <PostCompact
                    key={index}
                    title={post.title}
                    numUpvotes={post.numUpvotes}
                    timePosted={post.timePosted}
                />
            ))}
        </div>
    );
};

export default PostCompactList;
