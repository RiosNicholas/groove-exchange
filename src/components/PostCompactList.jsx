import PostCompact from "./PostCompact";

const PostCompactList = ({ posts }) => {
    return (
        <div>
            {posts.map((post) => (
                <PostCompact
                    key={post.id}
                    title={post.title}
                    numUpvotes={post.num_upvotes || 0}
                    timePosted={post.created_at || '1 minute'}
                    id={post.id}
                />
            ))}
       </div>
    );
};

export default PostCompactList;
