import React, { useState } from "react";
import { optionsData } from "../utils/data";
import { initialValues } from "../utils/data";
import ReCAPTCHA from "react-google-recaptcha";

function FormBody() {
  const [formValues, setFormValues] = useState(initialValues);

  //  General handleChange (It will work will all the fields)
  const handleChange = (event) => {
    // Validation for Phone Number
    if (event.target.type === "number") {
      if (
        (event.target.name === "prefixPhone" ||
          event.target.name === "middlePhone") &&
        event.target.value.length > 3
      ) {
        return;
      } else if (event.target.value.length > 4) {
        return;
      }
    }
    setFormValues((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  //   Recptcha onChange (handle logic according to requirement)
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  //   onSubmit function will execute after clicking Submit Form
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      yourName: {
        firstName: formValues?.firstName,
        lastName: formValues?.lastName,
      },
      email: formValues?.email,
      phoneNumber: {
        prefixPhone: formValues?.prefixPhone,
        middlePhone: formValues?.middlePhone,
        suffixPhone: formValues?.suffixPhone,
      },
      subject: formValues?.subject,
      message: formValues?.message,
    };

    console.log(formData, "formDataaaa");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-box">
        <label className="form-label text-white">Your Name</label>
        <input
          name="firstName"
          value={formValues?.firstName}
          onChange={handleChange}
          type="text"
          placeholder="First Name"
          className="form-input"
        />
        <input
          name="lastName"
          value={formValues?.lastName}
          onChange={handleChange}
          type="text"
          placeholder="Last Name"
          className="form-input"
        />
      </div>

      <div className="form-box">
        <label className="form-label text-white">Your Email </label>
        <input
          name="email"
          value={formValues?.email}
          onChange={handleChange}
          type="email"
          placeholder="e.g. hello@contact.net"
          className="form-input"
        />
      </div>

      <div className="form-box">
        <label className="form-label text-white">Phone Number*</label>
        <input
          name="prefixPhone"
          value={formValues?.prefixPhone}
          onChange={handleChange}
          required
          type="number"
          placeholder="###"
          className="form-input"
        />
        <input
          name="middlePhone"
          value={formValues?.middlePhone}
          onChange={handleChange}
          required
          type="number"
          placeholder="###"
          className="form-input"
        />
        <input
          name="suffixPhone"
          value={formValues?.suffixPhone}
          onChange={handleChange}
          required
          type="number"
          placeholder="####"
          className="form-input"
        />
      </div>

      <div className="form-box">
        <label className="form-label text-white">Message Subject*</label>
        <select
          value={formValues.subject}
          name="subject"
          className="form-input-select"
          onChange={handleChange}
        >
          {optionsData.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-box">
        <label className="form-label text-white">Message*</label>
        <textarea
          name="message"
          value={formValues?.message}
          onChange={handleChange}
          required
          rows={8}
          cols={130}
          className="form-input"
        />
      </div>

      <div className="form-box recaptcha">
        <label className="form-label text-white">Verification* </label>
        <ReCAPTCHA
          style={{ width: "100px" }}
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />
      </div>

      <hr className="horizantal" />
      <button className="btn btn-outline-primary">Submit Form</button>
    </form>
  );
}

export default FormBody;
