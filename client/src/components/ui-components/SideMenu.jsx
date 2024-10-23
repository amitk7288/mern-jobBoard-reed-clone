import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

import { PiXBold } from "react-icons/pi";

export default function SideMenu({ children, closeModal }) {
  let overlayRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && overlayRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <>
      {createPortal(
        <>
          <div
            className="fixed inset-0 z-[99]"
            ref={overlayRef}
          ></div>
          <dialog
            className="fixed inset-0 z-[100] block top-0 left-0"
            aria-modal
          >
            <div className="fixed top-0 left-0 w-[280px] bg-rdblue px-0 h-[100vh] pt-[60px]">
              <div className="no-scrollbar max-h-[80vh] overflow-y-auto">
                {children}
              </div>
            </div>
          </dialog>
        </>,
        document.body,
      )}
    </>
  );
}