import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

import { PiXBold } from "react-icons/pi";

export default function ModalDropDown({ children, closeModal }) {
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
          <div className="fixed inset-0 z-[99]" ref={overlayRef}></div>
          <dialog
            className="fixed inset-0 left-0 top-0 z-[100] block lg:hidden"
            aria-modal
          >
            <div className="fixed left-0 top-[51px] h-auto w-full bg-white px-4 md:py-[40px] md:pt-0 shadow-2xl">
              <PiXBold
                className="absolute right-4 top-3 cursor-pointer text-xl text-rdblack"
                onClick={closeModal}
              />
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
