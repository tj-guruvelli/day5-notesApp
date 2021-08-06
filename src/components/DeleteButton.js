import React from "react";

const DeleteButton = ({ children, onClick }) => {
  const classes = [
    "bg-red-700 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none text-white rounded-full",
    "text-white rounded-full",
    "py-2 px-4",
    "text-center font-bold",
  ].join(" ");

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default DeleteButton;
