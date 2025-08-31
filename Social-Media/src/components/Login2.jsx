import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // reset error before new login
    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      // console.log("Server response:", data);

      if (data.success) {
        // Save login state in localStorage
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userEmail", email);
        console.log("Reached till here")
        setMessage("✅ Login successful!");
        navigate("/app"); // redirect to home page
      } else {
        setError(data.message);
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("userEmail");
      }
    } catch (err) {
      if (err instanceof Error) {
        setMessage("Error connecting to server. " + err.message);
      } else {
        setMessage("Error connecting to server.");
      }
      setError("⚠️ Error connecting to server. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-800 border border-red-700 
                     focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        <label className="block mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-800 border border-red-700 
                     focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-red-700 hover:bg-red-800 text-white py-2 rounded-lg transition"
        >
          Login
        </button>

        {/* Error message */}
        {error && (
          <p className="mt-4 text-center text-sm text-red-400">{error}</p>
        )}

        {/* Success / info message */}
        {message && !error && (
          <p className="mt-4 text-center text-sm text-green-400">{message}</p>
        )}
      </form>
    </div>
  );
}
