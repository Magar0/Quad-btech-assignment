import { useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {

    return (
        <>
            <nav className="navbar flex justify-between py-3 px-10">
                <div className="flex justify-around w-1/3 ">

                    <Link to='/' className="nav-logo">
                        <img src='/image/logo.jpg' height={30} width={50} alt='logo' />
                    </Link>
                    <div className="flex items-center" >
                        <NavLink to='/about' className="nav-link">About</NavLink>
                        <NavLink to='/product' className="nav-link">Products</NavLink>
                        <NavLink to='/team' className="nav-link">For Teams</NavLink>
                    </div>
                </div>

                <form action="" className=" w-1/3 flex justify-center items-center relative ">
                    <input type="text" placeholder="Search..." className="w-4/5 border-slate-400 ps-10" />
                    <FaSearch className="search-icon absolute left-14 top-4" />
                </form>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar