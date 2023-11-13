import FeedFilter from "./FeedFilter";
import PostCompact from "./PostCompact";

const PostFeed = () => {
    return (
        <main className="mx-5 lg:mx-32">
            <FeedFilter />
            <PostCompact />
            <PostCompact />
            <PostCompact />
        </main>
    );
}

export default PostFeed;