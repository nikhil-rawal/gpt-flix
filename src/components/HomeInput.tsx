{
  /* <div className="flex flex-col my-[6px]">
  <input
    type="text"
    placeholder="Full Name"
    value={fullName}
    onChange={(e) => {
      setFullName(e.target.value);
      setErrorsInState("fullNameError", checkFullNameError(e.target.value));
    }}
    onBlur={() =>
      setAllErrors((prevState) => ({
        ...prevState,
        fullNameError: checkFullNameError(fullName),
      }))
    }
    className={`w-80 h-14 bg-transparent border-2 py-2 px-4 transition-all ease-in-out focus:placeholder:text-white focus:placeholder:text-[13px] focus:placeholder: rounded-md text-white outline-none ring-0 active:outline-none active:ring-0 border-[#606060] focus:border-white ${
      allErrors?.fullNameError && "border-[#e50914]"
    }`}
  />
  {allErrors?.fullNameError ? (
    <p className={`text-netflixRed flex items-center text-md my-0 max-w-80 `}>
      <RxCrossCircled className="font-bold" /> &nbsp;
      {allErrors?.fullNameError}
    </p>
  ) : (
    <>&nbsp;</>
  )}
</div>; */
}

import { RxCrossCircled } from "react-icons/rx";

export const HomeInput = ({
  inputType,
  inputPlaceholder,
  inputValue,
  inputOnChange,
  inputOnBlur,
  inputError,
}: {
  inputType: string;
  inputPlaceholder: string;
  inputValue: string;
  inputOnChange: React.ChangeEventHandler<HTMLInputElement>;
  inputOnBlur: React.FocusEventHandler<HTMLInputElement>;
  inputError: string | null;
}) => {
  return (
    <div className="flex flex-col my-[6px]">
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={inputOnChange}
        onBlur={inputOnBlur}
        className={`w-80 h-14 bg-transparent border-2 py-2 px-4 transition-all ease-in-out focus:placeholder:text-white focus:placeholder:text-[13px] focus:placeholder: rounded-md text-white outline-none ring-0 active:outline-none active:ring-0 border-[#606060] focus:border-white ${
          inputError && "border-[#e50914]"
        }`}
      />
      {inputError ? (
        <p
          className={`text-netflixRed flex items-center text-md my-0 max-w-80`}
        >
          <RxCrossCircled className="font-bold" /> &nbsp;
          {inputError}
        </p>
      ) : (
        <>&nbsp;</>
      )}
    </div>
  );
};
