import PostCompact from "./PostCompact";

const PostCompactList = ({ posts, onPostClick }) => {
    return (
        <div>
            {posts.map((post, index) => (
                <Link key={index} to={`/post/${post.id}`}>
                    <PostCompact
                        title={post.title}
                        numUpvotes={post.numUpvotes}
                        timePosted={post.timePosted}
                    />
                </Link>
            ))}
       </div>
    );
};

export default PostCompactList;
