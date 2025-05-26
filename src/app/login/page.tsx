"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setError("Please enter both username and password.");
      return;
    }

    if (username === "admin" && password === "Admin@123") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <main className="max-w-md mx-auto p-6 mt-20 border rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-red-600">Login</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded px-3 py-2"
          autoFocus
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded px-3 py-2"
        />

        <button
          type="submit"
          className="bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Login
        </button>
      </form>
    </main>
  );
}
