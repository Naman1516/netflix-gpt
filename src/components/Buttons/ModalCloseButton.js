import React from "react";
import CloseIcon from "../Icons/CloseIcon";

const ModalCloseButton = ({ closeModal }) => {
  return (
    <button
      className="bg-[#141414] rounded-full absolute right-4 top-2 p-2 z-40"
      onClick={closeModal}
    >
      <CloseIcon height={20} width={20} />
    </button>
  );
};

export default ModalCloseButton;
