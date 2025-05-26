"use client";

import { useState } from "react";

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateUser: (user: { name: string; email: string; password: string }) => void;
}

export default function CreateUserModal({ isOpen, onClose, onCreateUser }: CreateUserModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});

  if (!isOpen) return null;

  function validate() {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    onCreateUser({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
    setErrors({});
    onClose();
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 text-red-600">Create New User</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className={`p-2 border rounded ${
              errors.name ? "border-red-600" : "border-gray-300"
            }`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

          <input
            type="email"
            placeholder="Email"
            className={`p-2 border rounded ${
              errors.email ? "border-red-600" : "border-gray-300"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            className={`p-2 border rounded ${
              errors.password ? "border-red-600" : "border-gray-300"
            }`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
