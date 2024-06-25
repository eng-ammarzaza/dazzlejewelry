import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import NavbarLinks from "./NavbarLinks";
import CartIcon from "./CartIcon";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollTop = useRef(0);

  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var pageYOffset = window.scrollY;
        if (pageYOffset > lastScrollTop.current) {
          // downward scroll
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          // upward scroll
          setIsNavbarVisible(true);
        } // else was horizontal scroll
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`bm bg-[#fbfbf2] flex flex-col z-[50] md:flex-row justify-between items-center sticky ${
        isNavbarVisible ? "top-0" : ""
      }`}
    >
      <div className="w-full flex justify-between items-center h-16 md:h-full">
        <NavLink to={"/"}>
          <img
            className="md:w-36 w-28"
            src="/dazzleicon.png"
            alt="Dazzle Icon"
          />
        </NavLink>
        <div className="md:visible invisible ">
          <NavbarLinks />
        </div>
        {!isOpen ? (
          <div className="flex items-center md:hidden">
            <CartIcon />
            <CiMenuFries
              className="size-5 cursor-pointer"
              onClick={toggleNavbar}
            />
          </div>
        ) : (
          <IoCloseOutline
            onClick={toggleNavbar}
            className="md:hidden size-7 cursor-pointer"
          />
        )}
      </div>

      {isOpen && (
        <div className="md:hidden border-t w-full">
          <NavbarLinks />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
