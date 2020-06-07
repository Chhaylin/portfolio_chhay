import React from "react";
import { useForm } from "@formcarry/react";
import bg_1_mp4 from "../../assets/bg_1.mp4";
import bg_1_webm from "../../assets/bg_1.webm";

export default function Contact() {
  const { state, submit } = useForm({
    id: "lbIf0ZBLSGng",
  });

  // Success message
  if (state.submitted) {
    return <div className="form__message">Thank you for your message!</div>;
  }

  return (
    <div className="contact">
      <div className="bg-video">
        <video
          className="bg-video__content"
          loop
          autoPlay
          muted
          preload="metadata"
        >
          <source src={bg_1_mp4} type="video/mp4" />
          <source src={bg_1_webm} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <div className="contact__form">
        <form className="form" onSubmit={submit}>
          <input
            id="name"
            name="name"
            type="text"
            className="form__input"
            placeholder="NAME"
            required
          />
          <input
            id="email"
            type="email"
            name="email"
            className="form__input"
            placeholder="E-MAIL"
            required
          />
          <textarea
            id="message"
            name="message"
            rows="8"
            className="form__textarea"
            placeholder="YOUR MESSAGE"
            required
          />
          <input className="form__submit" type="submit" value="SEND"></input>
        </form>
      </div>
    </div>
  );
}
