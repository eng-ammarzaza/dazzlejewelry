import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { IoIosCloseCircle } from "react-icons/io";
import { useEffect } from "react";
import AOS from "aos";
const SideModalContext = createContext();
function SideModal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <SideModalContext.Provider value={{ openName, close, open }}>
      {children}
    </SideModalContext.Provider>
  );
}
function Open({ children, opens: openWindowName }) {
  const { open } = useContext(SideModalContext);
  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, []);
  const { openName, close } = useContext(SideModalContext);
  const ref = useOutsideClick(close);
  if (name !== openName) return null;
  return createPortal(
    <div className="flex z-[1000] justify-center fixed top-0 left-0 w-full h-dvh  transition-all delay-[0.5s]">
      <div
        data-aos="fade-left"
        className="flex  flex-col self-center h-full right-0 w-96 fixed bg-[#faedcd] bg-[url('/accountSideModalbg.jpg')] bg-cover translate-[-50%, -50%] shadow-lg transition-all delay-[0.5s]"
        ref={ref}
      >
        <button onClick={close} className="m-4 absolute z-10 self-end">
          <IoIosCloseCircle />
        </button>
        <div className="relative">
          <div>{cloneElement(children, { onCloseSideModal: close })}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}
SideModal.Open = Open;
SideModal.Window = Window;
export default SideModal;
