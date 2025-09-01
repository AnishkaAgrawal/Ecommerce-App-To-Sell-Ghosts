import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TrickyButtons from "./MagicButton";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userEmail", email);
        setMessage("🎉 Login successful! Welcome back!");
        navigate("/app");
      } else {
        setError("🚨 " + data.message);
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("userEmail");
      }
    } catch (err) {
      setError("⚠️ Error connecting to server. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-yellow-900 animate-pulse">
      <form
        onSubmit={handleLogin} noValidate
        className="bg-gradient-to-tr from-pink-700 via-purple-700 to-indigo-800 text-white p-8 rounded-3xl shadow-2xl w-96 transform hover:scale-105 transition duration-500"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center animate-bounce">
          😎 FUN Login!
        </h2>

        <label className="block mb-2 text-lg">Email ✉️</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type your secret email 🤫"
          className="w-full p-3 mb-4 rounded-full bg-gray-900 border-2 border-pink-500
             focus:outline-none focus:ring-4 focus:ring-pink-700 text-transparent
             caret-transparent font-bold placeholder-gray-600 appearance-none invalid:border-gray-700"
          required
        />

        <label className="block mb-2 text-lg">Password 🔒</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your secret password 🕵️‍♂️"
          className="w-full p-3 mb-4 rounded-full bg-gray-900 border-2 border-pink-500
             focus:outline-none focus:ring-4 focus:ring-pink-700 text-transparent
             caret-transparent font-bold placeholder-gray-600 appearance-none invalid:border-gray-700"
          required
        />
        <button
        disabled
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500
                     hover:from-purple-500 hover:to-pink-500 text-white py-3 rounded-full
                     font-bold text-lg transform hover:scale-110 transition-all"
        >
          🚀Submit
        </button>
      <div className="p-2 m-2"></div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500
                     hover:from-purple-500 hover:to-pink-500 text-white py-3 rounded-full
                     font-bold text-lg transform hover:scale-110 transition-all"
        >
          🚀 Exit-You can't do it!
        </button>
        {/* <TrickyButtons/> */}

        {error && (
          <p className="mt-4 text-center text-sm text-red-300 animate-shake">{error}</p>
        )}
        {message && !error && (
          <p className="mt-4 text-center text-sm text-green-300 animate-pulse">{message}</p>
        )}
      </form>
    </div>
  );
}
