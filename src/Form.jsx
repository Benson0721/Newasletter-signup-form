import { useState } from "react";
import ContentBox from "./ContentBox";
import "./css/form.css";
export default function Form() {
  const [success, setSuccess] = useState(false);
  return (
    <main className="form">
      {!success ? (
        <picture className="form__image">
          <source
            srcSet="./images/illustration-sign-up-desktop.svg"
            media="(min-width: 1440px)"
          />
          <source
            srcSet="./images/illustration-sign-up-desktop.svg"
            media="(min-width: 768px)"
          />
          <img
            src="./images/illustration-sign-up-mobile.svg"
            alt="sign-up-image"
          />
        </picture>
      ) : (
        <></>
      )}
      <ContentBox setSuccess={setSuccess} success={success} />
    </main>
  );
}
