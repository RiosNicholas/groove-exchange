const PostDetailed = ({ title, description, numUpvotes, timePosted, imgUrl, comments }) => {
return (
        <div>
            <main>
                <p className="font-light">Posted {timePosted} ago</p>
                <h2 className="font-bold text-xl">{title}</h2>
                <p>{description}</p>
                <img 
                    src={imgUrl} 
                />
                <p className="font-light">{numUpvotes} upvotes</p>
            </main>
            <div>
                <ul>
                    <li>{comments}</li>
                </ul>
            </div>
        </div>
    );
}

export default PostDetailed;