import FeedFilter from "./FeedFilter";
import PostCompact from "./PostCompact";

const PostFeed = () => {
    return (
        <main className="mx-5">
            <FeedFilter />
            <PostCompact />
            <PostCompact />
            <PostCompact />
        </main>
    );
}

export default PostFeed;