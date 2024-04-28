import React, { useEffect, useRef } from "react";
import { Modal } from "flowbite-react";
import { IoClose } from "react-icons/io5";
interface props {
  openModal: boolean;
  onclose: () => void;
  children: React.ReactNode;
  title: string;
};

const SharedModal: React.FC<props> = ({ openModal, children, title, onclose }) => {

  const modalContentRef = useRef<HTMLDivElement>(null);
//   const handleOutsideClick = (event: MouseEvent) => {

//     if (!modalContentRef.current?.contains(event.target as Node)) {
//         onclose(); 
//       }

//   };
//   useEffect(() => {
//     if (openModal) {
//       document.addEventListener("mousedown", handleOutsideClick);
//     } else {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, [openModal]);

  return (
    <div className="w-full">
      <Modal
        show={openModal}
        size="2xl"
        popup
        onClose={onclose}
      >
        <div
          ref={modalContentRef}
          className="flex items-center justify-between p-4 md:px-3 rounded-t"
        >
          <h3 className="text-lg font-semibold text-main dark:text-white">
            {title}
          </h3>
          <button onClick={onclose}>
            <IoClose />
          </button>
        </div>
        {children}
      </Modal>
    </div>
  );
};

export default SharedModal;
