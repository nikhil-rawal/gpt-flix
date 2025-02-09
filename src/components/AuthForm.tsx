export default function AuthForm() {
  return (
    // This is for new branch
    <div className="flex flex-col justify-center items-center rounded-md  bg-opacity-60 bg-black m-4 p-10">
      <header>
        <h1 className="text-4xl font-bold text-left mb-[28px]">Sign In</h1>
      </header>
      <form className="flex flex-col items-center justify-center w-full h-full">
        <input type="text" placeholder="Email" className="m-2 w-80" />
        <input type="password" placeholder="Password" className="m-2 w-80" />
        <button
          type="submit"
          className="bg-netflixRed text-white rounded-md m-2"
        >
          Sign In
        </button>
      </form>
      <footer>New here? Signup..</footer>
    </div>
  );
}

<div className="flex">
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
</div>;
