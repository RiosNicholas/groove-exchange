import PostCompact from "./PostCompact";

const PostCompactList = ({ posts }) => {
    return (
        <div>
            {posts.map((post) => (
                <PostCompact
                    title={post.title}
                    numUpvotes={post.numUpvotes}
                    timePosted={post.timePosted}
                    id={post.id}
                />
            ))}
       </div>
    );
};

export default PostCompactList;
