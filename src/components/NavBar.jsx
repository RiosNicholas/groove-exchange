import Logo from '../../public/record.svg';
const NavBar = () => {
    return (
        <header className="flex justify-evenly items-center top-0 w-screen px-5 py-1 bg-neutral-800">
            <h1 className='max-h-12 mx-5 my-1 font-black text-xl uppercase'>Groove Exchange</h1>
            <input
                type="text" 
                placeholder="Search" 
                className="p-1 mx-5 my-1 w-1/3 rounded-md font-medium"
            />
            <nav className="p-1 mx-5 my-1">
                <ul className="flex gap-4 text-base font-bold">
                    <li className="hover:cursor-pointer hover:text-purple-300"><a>Home</a></li>
                    <li className="hover:cursor-pointer hover:text-purple-300"><a>Create New Post</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;