import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { IoIosCloseCircle } from "react-icons/io";

const ModalContext = createContext();
function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}
function Open({ children, opens: openWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);
  if (name !== openName) return null;
  return createPortal(
    <div className="flex  justify-center fixed top-0 left-0 w-full bg-[#f4f4f9] bg-opacity-20 h-dvh backdrop-blur-sm z-[1000] transition-all delay-[0.5s]">
      <div
        className="flex flex-col self-center h-fit fixed rounded-tr-3xl rounded-bl-3xl bg-[url('/accountmodalbg.jpg')] bg-cover translate-[-50%, -50%] shadow-lg transition-all delay-[0.5s]"
        ref={ref}
      >
        <button onClick={close} className="m-4 absolute z-10 self-end">
          <IoIosCloseCircle />
        </button>
        <div className="relative">
          <div>{cloneElement(children, { onCloseModal: close })}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}
Modal.Open = Open;
Modal.Window = Window;
export default Modal;
