import { useState } from "react";
import Loading from "./Loading";
import Link from "next/link";

const ContactForm = ({ classes }) => {
  const initForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formState, setFormState] = useState(initForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.status === 200) {
        setFormState(initForm);
        setLoading(false);
        setSubmitted(true);
      } else {
        setLoading(false);
        setError(true);
      }
    });
  };

  if (loading) {
    return <Loading />;
  } else if (submitted) {
    return (
      <div className="text-2xl flex flex-col justify-center p-24 items-center">
        <p className="mb-5">
          Thank you for your inquiry, I will respond as soon as I am able!
        </p>
        <span className="underline">
          <Link href="/">Return Home</Link>
        </span>
      </div>
    );
  } else if (error) {
    return (
      <div className="text-2xl flex flex-col justify-center p-24 items-center">
        <p className="mb-10 text-center">
          {`There was an error submitting this form, please email dfjdeveloper@gmail.com directly`}
        </p>
        <span className="underline">
          <Link href="/">Return Home</Link>
        </span>
      </div>
    );
  } else {
    return (
      <form
        className={`${classes} ${submitted && "opacity-0"}`}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            maxLength="100"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="subject">
          Subject:
          <input
            type="text"
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            maxLength="200"
          />
        </label>
        <label htmlFor="message">
          <div className="flex justify-between">
            <span>Message:</span>{" "}
            <span className="text-sm">(2000 chars max)</span>
          </div>
          <textarea
            name="message"
            rows="9"
            value={formState.message}
            onChange={handleChange}
            maxLength="2000"
          />
        </label>
        <input type="submit" className="btn w-full my-5" />
      </form>
    );
  }
};

export default ContactForm;
