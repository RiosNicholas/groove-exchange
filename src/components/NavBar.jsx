import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="flex justify-evenly items-center top-0 w-screen px-5 py-3 bg-neutral-600">
            <h1 className='max-h-12 mx-4 my-1 font-black text-2xl uppercase text-lime-400'>Groove Exchange</h1>
            <input
                type="text" 
                placeholder="Search" 
                className="px-2 py-1 mx-5 my-1 w-1/3 rounded-md font-medium bg-neutral-800"
            />
            <nav className="p-1 mx-5 my-1">
                <ul className="flex items-center gap-5 text-base font-bold text-center">
                    <li className="hover:cursor-pointer hover:text-lime-300">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="hover:cursor-pointer hover:text-lime-300">
                        <Link to='/create-post'>Create Post</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </header>
    );
}

export default NavBar;