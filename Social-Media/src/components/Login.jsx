import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy captcha check
    if (captcha !== "1234") {
      alert("Captcha incorrect!");
      return;
    }

    // Dummy login (replace with real API later)
    if (name === "admin" && password === "password") {
      alert("Login successful 🎉");
    } else {
      alert("Invalid name or password ❌");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-black p-6 rounded-lg shadow-lg w-80 text-white"
      >
        <h2 className="text-xl mb-4">Login</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-3 rounded text-black"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 rounded text-black"
        />

        <input
          type="text"
          placeholder="Enter Captcha: 1234"
          value={captcha}
          onChange={(e) => setCaptcha(e.target.value)}
          className="w-full p-2 mb-3 rounded text-black"
        />

        <button className="w-full bg-red-600 hover:bg-red-700 p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
