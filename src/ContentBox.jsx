import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { schema } from "./schema";
import { useEffect, useState } from "react";
function CheckItem(content, idx) {
  return (
    <li key={idx} className="inline-block mb-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        className="inline-block mr-4"
      >
        <g fill="none">
          <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
          <path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8" />
        </g>
      </svg>
      {content}
    </li>
  );
}

export default function ContentBox({ setSuccess, success }) {
  const listItems = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(schema) });

  const [email, setEmail] = useState("");

  const onSubmit = (data) => {
    setEmail(data.email);
    setSuccess(true);
    reset();
  };

  return (
    <>
      {!success ? (
        <article className="form__contentBox">
          <h1 className="mb-6 text-[40px] md:text-[48px]  lg:text-[56px] font-bold">
            Stay updated!
          </h1>
          <p className="mb-6">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="mb-10 flex flex-col">
            {listItems.map((item, idx) => CheckItem(item, idx))}
          </ul>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="w-full flex mb-2">
              <label className="font-bold text-[12px]" htmlFor="email">
                Email address
              </label>
              {errors.email && (
                <p
                  className="font-bold text-Tomato text-[12px] ml-auto"
                  aria-live="polite"
                  role="alert"
                >
                  {errors.email?.message}
                </p>
              )}
            </div>
            <input
              {...register("email")}
              className={`form__email-item form__email-item--input ${
                errors.email ? "form__email-item--error" : ""
              }`}
              placeholder="email@company.com"
              id="email"
            />
            <button
              type="submit"
              className="form__email-item form__email-item--button text-white font-bold text-center bg-DarkSlateGrey hover:bg-Tomato "
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </article>
      ) : (
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
            A confirmation email has been sent to {email}. Please open it and
            click the button inside to confirm your subscription.
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
      )}
    </>
  );
}

/*
   const [formData, setFormData] = useState({ email: "" });
   const onchange = (e) => {
    const changeField = e.target.name;
    const newValue = e.target.value;
    setFormData((currData) => {
      return {
        ...currData,
        [changeField]: newValue,
      };
    });
  };
  const formHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };*/
