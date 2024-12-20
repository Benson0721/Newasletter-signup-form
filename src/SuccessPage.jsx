export default function Success({ setSuccess, email }) {
  console.log(email);
  return (
    <article className="form__contentBox h-auto sm:h-screen md:h-auto">
      <img
        src="../images/icon-success.svg"
        alt="success-image"
        className="w-16 h-16 mb-10"
      />
      <h1 className="mb-6 text-[40px] md:text-[48px]  lg:text-[56px] font-bold leading-none">
        Thanks for subscribing!
      </h1>
      <p className="mb-6">
        A confirmation email has been sent to {email} Please open it and click
        the button inside to confirm your subscription.
      </p>
      <button
        type="button"
        onClick={() => {
          setSuccess(false);
        }}
        className="form__email-item form__email-item--button text-white font-bold text-center bg-DarkSlateGrey hover:bg-Tomato sm:mt-auto"
      >
        Dismiss message
      </button>
    </article>
  );
}
