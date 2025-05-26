"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";
import AuthGuard from "@/components/AuthGuard";
import React from "react";
import StarRating from "@/components/StarRating";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  company: {
    department: string;
  };
  image: string;
  rating: number;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [selectedRating, setSelectedRating] = useState<string>("All");

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://dummyjson.com/users?limit=208");
      const data = await res.json();
      const usersWithRating = data.users.map((user: User) => ({
        ...user,
        rating: Math.floor(Math.random() * 5) + 1,
      }));

      setUsers(usersWithRating);
    };
    fetchUsers();
  }, []);

  const departments = Array.from(
    new Set(users.map((u) => u.company.department))
  ).sort();

  const filteredUsers = users.filter((user) => {
    const query = search.toLowerCase();

    const matchesSearch =
      user.firstName.toLowerCase().includes(query) ||
      user.lastName.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query);

    const matchesDepartment =
      selectedDepartment === "All" ||
      user.company.department === selectedDepartment;

    const matchesRating =
      selectedRating === "All" || user.rating === Number(selectedRating);

    return matchesSearch && matchesDepartment && matchesRating;
  });

  const handleBookmark = (user: User) => {
    const stored = localStorage.getItem("bookmarkedUsers");
    let bookmarks = stored ? JSON.parse(stored) : [];

    const alreadyBookmarked = bookmarks.find((u: User) => u.id === user.id);
    if (!alreadyBookmarked) {
      bookmarks.push(user);
      localStorage.setItem("bookmarkedUsers", JSON.stringify(bookmarks));
      toast.success(`${user.firstName} has been bookmarked!`);
    } else {
      toast.error(`${user.firstName} is already bookmarked.`);
    }
  };

  const handleCreateUser = (newUser: Omit<User, "id" | "image">) => {
    const newId =
      users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;

    const defaultImage = "https://i.pravatar.cc/80?u=" + newId;

    const createdUser: User = {
      id: newId,
      image: defaultImage,
      ...newUser,
    };

    setUsers((prev) => [createdUser, ...prev]);
    toast.success(`User ${newUser.firstName} ${newUser.lastName} created!`);
  };

  return (
    <AuthGuard>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Users</h1>

        <button
          onClick={() => setModalOpen(true)}
          className="mb-6 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          + Create User
        </button>

        {modalOpen && (
          <CreateUserModal
            onClose={() => setModalOpen(false)}
            onCreateUser={handleCreateUser}
          />
        )}

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-2 border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-300 rounded-md"
          />

          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="p-2 border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-300 rounded-md"
          >
            <option value="All">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          <select
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
            className="p-2 border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-300 rounded-md"
          >
            <option value="All">All Ratings</option>
            {[1, 2, 3, 4, 5].map((rate) => (
              <option key={rate} value={rate}>
                {rate} Star{rate > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex flex-col items-center transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl"
            >
              <Image
                src={user.image}
                alt={user.firstName}
                width={80}
                height={80}
                className="rounded-full mb-2"
              />

              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {user.firstName} {user.lastName}
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                {user.email}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Age: {user.age}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Dept: {user.company.department}
              </p>

              <StarRating rating={user.rating} />

              <div className="mt-4 flex gap-2">
                <Link href={`/employee/${user.id}`}>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm transition duration-200 cursor-pointer">
                    View
                  </button>
                </Link>

                <button
                  onClick={() => handleBookmark(user)}
                  className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-3 py-1 rounded-md text-sm transition duration-200 cursor-pointer"
                >
                  Bookmark
                </button>

                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition duration-200 cursor-pointer">
                  Promote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AuthGuard>
  );
}

interface CreateUserModalProps {
  onClose: () => void;
  onCreateUser: (user: Omit<User, "id" | "image">) => void;
}

function CreateUserModal({ onClose, onCreateUser }: CreateUserModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");
  const [errors, setErrors] = useState<{
    department: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    age?: string;
    company?: {
      department?: string;
    };
  }>({ department: "" });

  function validate() {
    const newErrors: typeof errors = {
      department: "",
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      age: undefined,
      company: { department: undefined },
    };

    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!age.trim()) newErrors.age = "Age is required";
    else if (isNaN(Number(age)) || Number(age) <= 0)
      newErrors.age = "Age must be a positive number";
    if (!department.trim()) {
      newErrors.department = "Department is required";
      if (!newErrors.company) newErrors.company = {};
      newErrors.company.department = "Department is required";
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(
      (val) =>
        val !== undefined &&
        val !== "" &&
        (typeof val !== "object" || Object.values(val).some((v) => !!v))
    );

    return !hasErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    onCreateUser({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      age: Number(age),
      company: { department: department.trim() },
      rating: 0,
    });

    setFirstName("");
    setLastName("");
    setEmail("");
    setAge("");
    setDepartment("");
    setErrors({ department: "" });
    onClose();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          Create New User
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.age && (
              <p className="text-red-500 text-sm mt-1">{errors.age}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.department && (
              <p className="text-red-500 text-sm mt-1">{errors.department}</p>
            )}
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm bg-gray-300 hover:bg-gray-400 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
