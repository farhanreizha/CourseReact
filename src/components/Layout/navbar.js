import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileLinks from "./mobilelinks";
import { Links } from "../utils/links";

function Navbar() {
  return (
    <Fragment>
      <nav className="fixed bg-blue-500 top-0 text-white py-3 w-full">
        <div className="px-5 md:max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="py-2">
            <span className="text-xl font-semibold">Deacourse</span>
          </Link>
          <div className="flex">
            {Links.map((link, i) => (
              <ul key={i} className="items-center hidden md:flex">
                <li>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      isActive ? "active" : "inActive"
                    }
                  >
                    {link.icon}
                    {link.title}
                  </NavLink>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </nav>
      <MobileLinks />
    </Fragment>
  );
}

export default Navbar;
