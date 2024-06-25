import { useNavigate } from "react-router-dom";
import Social from "./social/Social";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-brand-500 text-[#fff] mt-10  pb-2">
      <div className="container mx-auto px-10 flex flex-col md:gap-36 md:flex-row">
        <div
          onClick={() => navigate("/")}
          className="bg-[#fff] cursor-pointer h-1/2 md:w-1/4 w-1/2 rounded-bl-3xl rounded-br-3xl flex justify-center"
        >
          <img
            className="md:h-24 md:my-8 h-32 p-3"
            src="/dazzlelogo.png"
            alt="Dazzle Icon"
          />
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-14 py-14">
          <div>
            <div className="tracking-wide text-gray-100 font-semibold">
              Jewelry
            </div>
            <ul className="list-none mt-6 space-y-2">
              <li
                onClick={() => navigate("/products?category=necklaces")}
                className="hover:text-[#595454] cursor-pointer transition-all duration-500 ease-in-out"
              >
                Necklaces
              </li>

              <li
                onClick={() => navigate("/products?category=bracelets")}
                className="hover:text-[#595454] cursor-pointer transition-all duration-500 ease-in-out"
              >
                Bracelets
              </li>
              <li
                onClick={() => navigate("/products?category=earrings")}
                className="hover:text-[#595454] cursor-pointer transition-all duration-500 ease-in-out"
              >
                Earrings
              </li>
              <li
                onClick={() => navigate("/products?category=rings")}
                className="hover:text-[#595454] cursor-pointer transition-all duration-500 ease-in-out"
              >
                Rings
              </li>
            </ul>
          </div>

          <div className="w-28">
            <div className="tracking-wide text-gray-100 font-semibold">
              Our Brand
            </div>
            <ul className="list-none mt-6 space-y-2">
              <li
                onClick={() => navigate("/")}
                className="hover:text-[#595454] cursor-pointer transition-all duration-500 ease-in-out"
              >
                Home
              </li>
              <li
                onClick={() => navigate("/about")}
                className="hover:text-[#595454] cursor-pointer transition-all duration-500 ease-in-out"
              >
                About
              </li>
              <li
                onClick={() => navigate("/contact")}
                className="hover:text-[#595454] cursor-pointer transition-all duration-500 ease-in-out"
              >
                Contact
              </li>
              <li
                onClick={() => navigate("/")}
                className="hover:text-[#595454] cursor-pointer transition-all duration-500 ease-in-out"
              >
                Stores
              </li>
            </ul>
          </div>

          <div className="w-28">
            <div className="tracking-wide text-gray-100 font-semibold">
              Help
            </div>
            <ul className="list-none mt-6 space-y-2">
              <li className="hover:text-[#595454] cursor-pointer transition-all duration-500 ease-in-out">
                FAQs
              </li>
              <li className="hover:text-[#595454] cursor-pointer transition-all duration-500 ease-in-out">
                Our Policy
              </li>
              <li className="hover:text-[#595454] cursor-pointer transition-all duration-500 ease-in-out">
                Term of use
              </li>
              <li className="hover:text-[#595454] cursor-pointer transition-all duration-500 ease-in-out">
                Cookies
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center">
        <Social />
      </div>
      <div className="border-t pt-2 text-center flex flex-col md:flex-row justify-end gap-x-[25%] items-center ml-6 mr-4">
        &copy; {new Date().getFullYear()} Dazzle All Right Reserved.
        <img
          src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
          className="h-8 ml-3"
          alt="E-Payment partenrs"
        />
      </div>
    </footer>
  );
}

export default Footer;
