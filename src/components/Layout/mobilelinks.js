import { NavLink } from "react-router-dom";
import { Links } from "../utils/links";

function MobileLinks() {
  return (
    <nav className="fixed w-full bottom-0 bg-blue-500 text-white py-3 md:hidden ">
      <div className="px-5 md:max-w-7xl mx-auto flex justify-between items-center">
        {Links.map((link, i) => (
          <ul key={i} className="items-center">
            <li>
              <NavLink
                to={link.href}
                className={({ isActive }) => (isActive ? "active" : "inActive")}
              >
                {link.icon}
                {link.title}
              </NavLink>
            </li>
          </ul>
        ))}
      </div>
    </nav>
  );
}

export default MobileLinks;
