import { formatDistanceToNow } from 'date-fns';
import PostCompact from "./PostCompact";

const PostCompactList = ({ posts }) => {
    return (
        <div>
            {posts.map((post) => (
                <PostCompact
                    key={post.id}
                    title={post.title}
                    numUpvotes={post.num_upvotes || 0}
                    timePosted={formatDistanceToNow(new Date(post.created_at), { addSuffix: true }) || 'less than 1 minute ago'}
                    id={post.id}
                />
            ))}
       </div>
    );
};

export default PostCompactList;
