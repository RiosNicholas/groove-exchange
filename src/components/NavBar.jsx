const NavBar = () => {
    return (
        <header className="flex justify-evenly items-center top-0 w-screen px-5 py-3 bg-neutral-600">
            <h1 className='max-h-12 mx-4 my-1 font-black text-2xl uppercase text-lime-400'>Groove Exchange</h1>
            <input
                type="text" 
                placeholder="Search" 
                className="p-1 mx-5 my-1 w-1/3 rounded-md font-medium bg-neutral-800"
            />
            <nav className="p-1 mx-5 my-1">
                <ul className="flex gap-5 text-base font-bold">
                    <li className="hover:cursor-pointer hover:text-lime-300"><a>Home</a></li>
                    <li className="hover:cursor-pointer hover:text-lime-300"><a>Create Post</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;