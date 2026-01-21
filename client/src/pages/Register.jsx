import { useState } from "react";
import { registerStudent } from "../services/api";
import "../styles/form.css";

export default function Register() {
  const [form, setForm] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await registerStudent(form);
    alert("Registration submitted successfully");

    setForm({
      parentName: "",
      email: "",
      phone: "",
      childName: "",
      message: ""
    });
  } catch (error) {
    alert("Error: " + error.message);
  }
};


  return (
    <>
     <div className="Register-Hero-Section">
        <div className="Register-Contents">
          <h1>Enroll Your Child Today</h1>
          <p>Join our fun, interactive programs and give your child the gift of confident communication and lifelong learning</p>
        </div>
      </div>
      <div className="Register-Heading">
        <h1>Register<span>Form</span></h1>
        <p>Please fill in the details below to register your child. Our team will contact you within 24 hours to confirm the enrollment</p>
      </div>
    <div className="form-container">
      
      <form className="form-card" onSubmit={handleSubmit}>

        <input name="parentName" placeholder="Parent Name" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
        <input name="phone" placeholder="Phone" required onChange={handleChange} />
        <input name="childName" placeholder="Child Name" onChange={handleChange} />
        <textarea name="message" placeholder="Message" onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
    </>
 
  );
}
