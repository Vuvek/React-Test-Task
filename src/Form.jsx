import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');

    const [email,setEmail] = useState('');

    const [prefixPhone,setPrefixPhone] = useState(null);
    const [middlePhone,setMiddlePhone] = useState(null);
    const [suffixPhone,setSuffixPhone] = useState(null);

    const [messgae,setMessage] = useState('');
    const [subject,setSubject] = useState('');




  function onChange(value) {
    console.log("Captcha value:", value);
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({firstName,lastName,prefixPhone,middlePhone,suffixPhone,messgae,subject})
  }
  return (
    <>
      <div className="bg text-white my-5 w-100 w-sm-75 w-md-50">
        <h1>Contact Form</h1>
        <p>Please fill in your information and we'll be sending your order in no time.</p>

        <form onSubmit={handleSubmit} className="bg text-white">
          <div className="d-flex gap-3 my-3 text-white">
            <label className="form-label fix-width">Your Name:</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" className="form-group w-75 p-2 "/>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name"  className="form-group w-75 p-2"/>
          </div>
          <div className="d-flex gap-3 my-3 text-white">
            <label className="form-label fix-width">Your Email :</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email Address" className="form-group w-100 p-2" />
          </div>

          <div className="d-flex gap-3 my-3 text-white">
            <label className="form-label fix-width">Phone Number*:</label>
            <input value={prefixPhone} onChange={(e) => setPrefixPhone(e.target.value)} required type="number" placeholder="###" className="form-group w-50 p-2" />
            <input value={middlePhone} onChange={(e) => setMiddlePhone(e.target.value)} required type="number" placeholder="###" className="form-group w-50 p-2" />
            <input value={suffixPhone} onChange={(e) => setSubject(e.target.value)} required type="number" placeholder="###" className="form-group w-50 p-2" />
          </div>

          <div className="d-flex gap-3 my-3 text-white">
            <label className="form-label fix-width">Message Subject*:</label>
            <input value={subject} onChange={(e) => setSubject(e.target.value)} required type="text" placeholder="Other" className="form-group w-50 p-2" />
          </div>

          <div className="d-flex gap-3 my-3 text-white">
            <label className="form-label fix-width">Message* :</label>
            <textarea value={messgae} onChange={(e) => setMessage(e.target.value)} required rows={5} cols={130} className="form-group w-100 p-2"/>
          </div>

          <div className="d-flex gap-3 my-3 text-white">
            <label className="form-label fix-width">Verification* :</label>
            <ReCAPTCHA required sitekey="Your client site key" onChange={onChange} />
          </div>

          
            <hr />
          <button className="btn btn-lg btn-primary mt-2">Submit Form</button>
        </form>
      </div>
    </>
  );
};

export default Form;
