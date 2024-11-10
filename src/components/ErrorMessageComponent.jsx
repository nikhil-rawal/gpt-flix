import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const ErrorMessageComponent = ({ message }) => {
  return (
    <span className="text-[#d22f27] text-sm -mt-3 text-left w-8/12 flex flex-row items-center">
      <RxCrossCircled /> &nbsp;
      {message}
    </span>
  );
};

export default ErrorMessageComponent;
