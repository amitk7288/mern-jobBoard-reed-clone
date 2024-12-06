import { useState, useEffect, useRef } from "react";

export default function DropMenu({ children, trigger, pos }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <div onClick={toggleDropdown}>{trigger}</div>

      {isOpen && (
        <div
          className={`absolute z-[100] mt-2 rounded-sm border border-gray-200 bg-white shadow-lg w-[150px] md:w-full ${pos}`}
        >
          {children(handleClose)}
        </div>
      )}
    </div>
  );
}
