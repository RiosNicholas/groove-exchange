const FeedFilter = () => {
    return(
        <div className="m-2">
            <p className="text-white text-sm m-1">
                Order by: 
                <span>
                    <button className="bg-lime-700 font-bold p-1 m-1 hover:border-neutral-400">Newest</button>
                    <button className="bg-lime-600 font-bold p-1 m-1 hover:border-neutral-400">Most Popular</button>
                </span>
            </p>
        </div>
    );
}

export default FeedFilter;