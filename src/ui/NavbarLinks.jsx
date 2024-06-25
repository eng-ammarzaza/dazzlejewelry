import { IoPersonOutline } from "react-icons/io5";
import Modal from "./Modal";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Signup from "../features/authentication/Signup";
import { getSession, logout } from "../services/AuthAPI";
import { IoIosHeartEmpty } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import CartIcon from "./CartIcon";
function NavbarLinks() {
  const [session, setSettion] = useState();
  const navigate = useNavigate();

  getSession().then(function (result) {
    setSettion(result?.session.access_token);
  });

  return (
    <div className="flex flex-col md:flex-row md:flex-nowrap flex-wrap gap-6 place-items-center mr-6 text-xl font-navbar my-3 md:my-0">
      <NavLink
        to={"/products"}
        className={({ isActive }) =>
          isActive
            ? "text-brand-200 border-b-4 border-b-brand-200 md:py-6"
            : "border-b-4 border-b-[#fbfbf2] md:py-6  hover:text-brand-200 hover:border-b-4 hover:border-b-brand-200"
        }
      >
        Jewelry
      </NavLink>

      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive
            ? "text-brand-200 border-b-4 border-b-brand-200 md:py-6"
            : "border-b-4 border-b-[#fbfbf2] md:py-6  hover:text-brand-200 hover:border-b-4 hover:border-b-brand-200"
        }
      >
        About
      </NavLink>

      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          isActive
            ? "text-brand-200 border-b-4 border-b-brand-200 md:py-6"
            : "border-b-4 border-b-[#fbfbf2] md:py-6 hover:text-brand-200 hover:border-b-4 hover:border-b-brand-200"
        }
      >
        Contact
      </NavLink>
      <CartIcon />
      <NavLink to={"/wishlist"}>
        <IoIosHeartEmpty className="cursor-pointer" title="Wishlist" />
      </NavLink>

      {session !== undefined ? (
        <button
          onClick={() => {
            logout();
            setSettion(undefined);
            navigate("/");
          }}
          title="logout"
        >
          <HiArrowRightOnRectangle />
        </button>
      ) : (
        <Modal>
          <Modal.Open opens="signup-form">
            <IoPersonOutline className="cursor-pointer" title="signup" />
          </Modal.Open>
          <Modal.Window name="signup-form">
            <Signup />
          </Modal.Window>
        </Modal>
      )}
    </div>
  );
}

export default NavbarLinks;
