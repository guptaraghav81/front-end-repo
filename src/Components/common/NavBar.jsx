import React, { useEffect, useState } from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import logo from "../../assets/Logo/nobg-logo-coffee.png"
import { NavbarLinks } from '../../data/navbar-links'
import "../../App.css"
import { useSelector } from 'react-redux'
import { MdShoppingCart } from "react-icons/md";
import ProfileDropDown from '../Core/Auth/ProfileDropDown'
import { apiConnector } from '../../services/apiConnector'
import { categories } from '../../services/apis'
import { FaCircleChevronDown } from "react-icons/fa6";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NavBar = () => {

    const {token} = useSelector((state) => state.auth);
    const {user} = useSelector((state) => state.profile);
    const {totalItems} = useSelector((state) => state.cart);

    const [subLinks, setSubLinks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);

    useEffect(() => {
        (async () => {
          setLoading(true)
          try {
            const res = await apiConnector("GET", categories.CATEGORIES_API)
            setSubLinks(res.data.data)
          } catch (error) {
            console.log("Could not fetch Categories.", error)
          }
          setLoading(false)
        })()
      }, []);

    const location = useLocation();
    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    const toggleCatalog = (e) => {
        e.stopPropagation()
        setIsCatalogOpen(!isCatalogOpen);
   }

    return (
        <div className='w-[100%] flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 mx-auto'>
            <div className='w-10/12 flex items-center justify-between mx-auto'>
                <div className='h-full'>
                    <Link to={"/"} className='h-[100px]'>
                        <img src={logo} alt="" srcset="" width={140} className='bg-transparent -ml-8 lg:ml-0 rounded-lg brightness-200' />
                    </Link>
                </div>
                <div className='lg:hidden text-white' onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <HiOutlineX  size={30} /> : <HiOutlineMenu size={30} />}
                </div>
                <nav className={`lg:flex hidden gap-x-6 text-richblack-25`}>
                    <ul className='flex gap-x-6'>
                        {
                            NavbarLinks.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {
                                            item.title === "Catalog" ? (
                                                <div className='relative flex items-center gap-1 group cursor-pointer z-10'>
                                                    <p>{item.title}</p>
                                                    <FaCircleChevronDown />
                                                    <div className='invisible absolute left-[50%] top-[50%] translate-x-[-80%] translate-y-[50%] flex flex-col rounded-tr-xl rounded-bl-xl bg-richblack-800 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px] z-[30] -mt-10'>
                                                        <div className='absolute left-[86%] -top-2 h-6 w-6 rotate-45 rounded bg-richblack-800 z-[-1]'>
                                                        </div>
                                                        {
                                                            subLinks.length ? (
                                                                subLinks.map((subLink, index) => {
                                                                    return (
                                                                        <Link to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`} key={index}>
                                                                            <p className='bg-white font-bold hover:bg-yellow-200 py-2 pl-3 rounded-tr-xl rounded-bl-xl text-richblack-800 hover:text-white shadow-sm shadow-caribbeangreen-600 mt-1'>{subLink.name}</p>
                                                                        </Link>
                                                                    )
                                                                })
                                                            ) : (<div></div>)
                                                        }
                                                    </div>
                                                </div>
                                            ) : (
                                                <Link to={item?.path}>
                                                    <p className={` ${matchRoute(item?.path) ? "highlightedText" : ""} font-semibold`}>{item.title}</p>
                                                </Link>
                                            )
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>

                {/* login/signup/dashboard */}
                <div className='hidden lg:flex gap-x-4 items-center'>
                    {
                        user && user.accountType !== "Instructor" && (
                            <Link to="/dashboard/cart" className='relative text-white'>
                                <MdShoppingCart className='w-8 h-5' />
                                {
                                    totalItems > 0 && (
                                        <span className='absolute -right-2 -top-3 bg-green-600 rounded-full w-5 h-5 flex items-center justify-center'>{totalItems}</span>
                                    )
                                }
                            </Link>
                        )
                    }

                    {
                        token === null && (
                            <>
                                <Link to="/login">
                                    <button className='bg-yellow-50 text-[14px] text-black px-[9px] py-[6px] rounded-md font-semibold hover:scale-95 transition-all duration-200'>Log in</button>
                                </Link>
                                <Link to="/signup">
                                    <button className='bg-richblack-800 text-[14px] px-[9px] py-[6px] text-white rounded-md font-semibold hover:scale-95 transition-all duration-200'>Sign Up</button>
                                </Link>
                            </>
                        )
                    }

                    {
                        token !== null && (
                            <ProfileDropDown />
                        )
                    }
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-full w-60 bg-richblack-900 text-white z-40 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 lg:hidden`}>
                
                <div className='w-[85%]  mx-auto flex justify-between items-center mt-6 '>
                    {
                        user && user.accountType !== "Instructor" && (
                            <Link to="/dashboard/cart" className='relative text-white' onClick={toggleMobileMenu}>
                                <MdShoppingCart className='w-8 h-5' />
                                {
                                    totalItems > 0 && (
                                        <span className='absolute -right-2 -top-3 bg-green-600 rounded-full w-5 h-5 flex items-center justify-center'>{totalItems}</span>
                                    )
                                }
                            </Link>
                        )
                    }

                    {
                        token === null && (
                            <>
                                <Link to="/login" onClick={toggleMobileMenu}>
                                    <button className='bg-yellow-50 text-[14px] text-black px-[9px] py-[6px] rounded-md font-semibold hover:scale-95 transition-all duration-200'>Log in</button>
                                </Link>
                                <Link to="/signup" onClick={toggleMobileMenu}>
                                    <button className='bg-richblack-800 text-[14px] px-[9px] py-[6px] text-white rounded-md font-semibold hover:scale-95 transition-all duration-200'>Sign Up</button>
                                </Link>
                            </>
                        )
                    }

                    {
                        token !== null && (
                            <ProfileDropDown />
                        )
                    }
                    <HiOutlineX size={30} onClick={toggleMobileMenu} />
                    
                </div>
                <nav className='flex flex-col p-4'>
                    <ul className='flex flex-col gap-y-4'>
                        {
                            NavbarLinks.map((item, index) => (
                                <li key={index} onClick={toggleMobileMenu}>
                                    {item.title === "Catalog" ? (
                                        <div className='relative flex flex-col  gap-1 group cursor-pointer z-10'>
                                            <p onClick={toggleCatalog}>{item.title}</p>
                                            {
                                                isCatalogOpen ? (<div className=''>
                                                    {
                                                        subLinks.length ? (
                                                            subLinks.map((subLink, index) => (
                                                                <Link to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`} key={index}>
                                                                    <p className='pl-3 font-bold text-richblack-200 hover:text-richblack-900 bg-richblack-800 rounded-lg w-fit flex items-center justify-center px-2 hover:bg-yellow-50  my-2'>{subLink.name}</p>
                                                                </Link>
                                                            ))
                                                        ) : (<div></div>)
                                                    }
                                                </div>):(<></>) 
                                            }
                                        </div>
                                    ) : (
                                        <Link to={item?.path}>
                                            <p className={` ${matchRoute(item?.path) ? "highlightedText" : ""} font-semibold`}>{item.title}</p>
                                        </Link>
                                    )}
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;
