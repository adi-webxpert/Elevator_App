"use client";
import React, { useRef, useState } from "react";

function Page() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    company: "",
    phonenumber: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = formRef.current;
    
    setFormData({
      firstname: values.firstname.value,
      lastname: values.lastname.value,
      company: values.company.value,
      phonenumber: values.phonenumber.value,
      email: values.email.value,
      message: values.message.value,
    });

    try {
      const res = await fetch(`/api/mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Response data:", data);
    } catch (error) {
      console.error("API call error:", error);
    }
  };

  return (
    <div className="bg-white px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Contact Form</h2>
        <p className="mt-2 text-lg">We'd love to hear from you!</p>
      </div>
      <form ref={formRef} onSubmit={handleSubmit} className="mx-auto mt-10 max-w-lg">
        <div className="grid grid-cols-1 gap-6">
          {["firstname", "lastname", "company", "email", "phonenumber", "message"].map((field, index) => (
            <div key={index}>
              <label htmlFor={field} className="block text-sm font-semibold">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type={field === "email" ? "email" : field === "phonenumber" ? "tel" : "text"}
                name={field}
                id={field}
                className="mt-1 block w-full border px-3 py-2 rounded-md"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            style={{backgroundColor: ""}}
            className="mt-4 w-full bg-[#771818] text-white py-2 rounded-md hover:bg-[#6b1515]"
            >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page;
