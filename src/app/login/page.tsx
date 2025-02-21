"use client" ;

import { useState } from "react";
import { loginUser, registerUser } from "../utils/api";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login & Signup
  const [identifier, setIdentifier] = useState(""); // For Login
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // Only for Signup
  const [email, setEmail] = useState(""); // Only for Signup
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      let res;
      if (isLogin) {
        res = await loginUser({ identifier, password }); // Correct usage
      } else {
        res = await registerUser({ username, email, password }); // Correct usage
      }

      localStorage.setItem("token", res.jwt); // Store JWT token
      router.push("/"); /
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <form onSubmit={handleAuth} className="space-y-4">
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 border rounded"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </>
          )}
          <input
            type="text"
            placeholder="Email or Username"
            className="w-full p-2 border rounded"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 ml-1 underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
