
const FeedFilter = ({ orderBy, setOrderBy }) => {

    const buttonClass = (value) => {
        return `font-bold p-1 m-1 hover:border-neutral-400 ${orderBy === value ? 'bg-lime-700' : 'bg-lime-600'}`;
    };

    return (
        <div className="m-2">
            <p className="text-white text-sm m-1">
                Order by:
                <span>
                    <button
                        className={buttonClass('newest')}
                        onClick={() => setOrderBy('newest')}
                    >
                        Newest
                    </button>
                    <button
                        className={buttonClass('mostPopular')}
                        onClick={() => setOrderBy('mostPopular')}
                    >
                        Most Popular
                    </button>
                </span>
            </p>
        </div>
    );
};

export default FeedFilter;
