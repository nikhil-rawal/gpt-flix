import { RxCrossCircled } from "react-icons/rx";

export default function AuthForm() {
  return (
    // This is for new branch
    <div className="flex flex-col justify-center rounded-sm  bg-opacity-60 bg-black m-4 p-10 cursor-pointer">
      <header>
        <h1 className="text-white text-4xl font-bold mb-[24px]">Sign In</h1>
      </header>
      <form className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col my-[10px] ">
          <input
            type="text"
            placeholder="Email"
            className="w-80 h-14 bg-transparent border border-[#606060] py-2 px-4 placeholder:text-[#bababa] rounded-md outline-white text-white"
          />
          <text className="text-netflixRed flex items-center text-md my-1">
            <RxCrossCircled className="font-bold" /> &nbsp;Please enter a valid
            email
          </text>
        </div>

        <div className="flex flex-col my-[10px] ">
          <input
            type="password"
            placeholder="Password"
            className="w-80 h-14 bg-transparent border border-[#606060] py-2 px-4 placeholder:text-[#bababa] rounded-md outline-white text-white"
          />
          <text className="text-netflixRed flex items-center text-md my-1">
            <RxCrossCircled className="" /> &nbsp;Please enter a valid password
          </text>
        </div>
        <button
          type="submit"
          className="my-[10px] bg-netflixRed text-white rounded-md m-2 w-80 h-10 font-semibold"
        >
          Sign In
        </button>
      </form>
      <footer>
        <p className="my-[10px] text-white text-center">Forgot Password?</p>
        <p className="mt-[24px] mx-2 text-[#b4b4b4]">
          New to GPT-Flix?{"  "}
          <button className="font-semibold text-white">Sign Up Now!</button>
        </p>
      </footer>
    </div>
  );
}

{
  /* <div className="flex">
  <div className="inline-flex align-text-top">
    <label className="text-[0.75rem] text-[rgba(255,_255,_255,_0.7)] left-4 leading-normal right-4 top-2">
      Email
    </label>
    <div className="form-control_controlWrapperStyles__oy4jpq1" dir="ltr">
      <input
        type="text"
        autoComplete="email"
        className="input_nativeElementStyles__1euouia0"
        dir="ltr"
        id=":rf:"
        name="userLoginId"
        data-uia="login-field"
        defaultValue=""
      />
      <div
        aria-hidden="true"
        className="form-control_controlChromeStyles__oy4jpq4"
        dir="ltr"
      />
    </div>
  </div>
</div>; */
}
