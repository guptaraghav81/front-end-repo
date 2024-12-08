import React from 'react'
import * as Icons from "react-icons/vsc"
import { useDispatch } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, matchPath, useLocation } from 'react-router-dom';
const SidebarLink = ({link, IconName}) => {
    const Icon = Icons[IconName];
    const location = useLocation();
    const dispatch = useDispatch();

    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }

  return (
    <NavLink
    to={link.path}
    className={ `relative px-8 py-2 text-sm font-medium ${matchRoute(link.path) ? "bg-yellow-800" :"bg-opacity-0"}`}
    >

        <span className={`absolute h-[100%] left-0 top-0 w-[0.2rem] bg-yellow-50
        ${matchRoute(link.path) ? " opacity-100": " opacity-0"}`}>

        </span>
        {
          IconName == "FaShoppingCart " ? (<div className='flex item-center gap-x-2'>
            <FaShoppingCart className="text-lg" />
            <span>{link.name}</span>
        </div>) : (
        <div className='flex item-center gap-x-2'>
            <Icon className="text-lg" />
            <span>{link.name}</span>
        </div>
          )
}
    </NavLink>
    
  )
}

export default SidebarLink