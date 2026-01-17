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
    <div className="form-container">
      <form className="form-card" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <input name="parentName" placeholder="Parent Name" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
        <input name="phone" placeholder="Phone" required onChange={handleChange} />
        <input name="childName" placeholder="Child Name" onChange={handleChange} />
        <textarea name="message" placeholder="Message" onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
