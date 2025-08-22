import React, { useState } from "react";
import greenZigzag from "../../assets/green_zigzag.png";

const ContactTouch = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent! Please check your email inbox for confirmation.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus(result.error || "Failed to send message.");
      }
    } catch (error) {
      setStatus("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-gray-100 pt-8 pb-16 flex flex-col items-center font-['Open_Sans']">
      <h2 className="text-5xl font-bold text-center mb-3 tracking-tight text-gray-900">
        Get In Touch
      </h2>
      <p className="text-lg text-center text-gray-700 mb-5">
        Get started with your amazing project
      </p>
      <img
        src={greenZigzag}
        alt="Green Zigzag Decorative Element"
        className="mt-0 mb-10 w-16"
        style={{ filter: "drop-shadow(0 1px 0 #34d399)" }}
      />
      <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="w-full max-w-[90%] md:max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-7">
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            value={form.name}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none text-base transition-all duration-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Your-mail@gmail.com*"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none text-base transition-all duration-200"
          />
          <input
            type="text"
            name="subject"
            placeholder="Your Subject"
            value={form.subject}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none text-base transition-all duration-200"
          />
        </div>
        <textarea
          name="message"
          placeholder="Comment*"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full max-w-[90%] md:max-w-6xl px-4 py-5 border border-gray-300 rounded bg-white focus:outline-none text-base mb-6 transition-all duration-200"
          rows={6}
        />
        <button
          type="submit"
          className="w-40 py-3 bg-green-600 text-white font-semibold text-lg hover:bg-green-700 transition-all rounded-none"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
      {status && <p className="mt-4 text-center text-green-700 font-semibold">{status}</p>}
    </div>
  );
};

export default ContactTouch;
