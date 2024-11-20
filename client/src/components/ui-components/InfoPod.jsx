import React from "react";
import { useState } from "react";
import Modal from "../ui-components/Modal";

export default function InfoPod({title, headerIcon, headerLink, children, modalContent}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`flex flex-col rounded-md border border-[#c8c8c8] bg-white text-[#0f151a] md:w-[100%]`}>
        <div className="flex items-center justify-between border-b p-4">
          <p className="text-[20px] font-bold text-rdblack">{title}</p>
          <div
            className="flex cursor-pointer items-center gap-2 font-medium"
            onClick={() => setIsOpen(true)}
          >
            <p className="hidden text-rdlightBlue s:block">{headerLink}</p>
            <div className="text-rdlightBlue">{headerIcon}</div>
          </div>
        </div>
        <div className="p-4">{children}</div>
      </div>
      {isOpen && (
        <Modal closeModal={() => setIsOpen(false)}>
          <div>
            {React.cloneElement(modalContent, {
              closeModal: () => setIsOpen(false),
            })}
          </div>
        </Modal>
      )}
    </>
  );
}