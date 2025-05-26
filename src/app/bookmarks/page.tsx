"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { useBookmarks } from "../../hooks/useBookmarks";
import { Card } from "../../components/card";
import { Button } from "../../components/Button";
import AuthGuard from "@/components/AuthGuard";

export default function BookmarksPage() {
  const { bookmarks, removeBookmark } = useBookmarks();

  const [search, setSearch] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");

  const handlePromote = (userId: number) => {
    const user = bookmarks.find((u) => u.id === userId);
    toast.success(`${user?.firstName} has been promoted successfully!`);
  };

  const handleAssignProject = (userId: number) => {
    const user = bookmarks.find((u) => u.id === userId);
    toast.success(`${user?.firstName} assigned to project!`);
  };

  // Get unique departments
  const departments = [...new Set(bookmarks.map((u) => u.company?.department))];

  // Filtered bookmarks
  const filteredBookmarks = bookmarks.filter((user) => {
    const matchesSearch =
      user.firstName.toLowerCase().includes(search.toLowerCase()) ||
      user.lastName.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      selectedDepartment === "All" ||
      user.company?.department === selectedDepartment;

    const matchesRating =
      selectedRating === "All" || String(user.rating) === selectedRating;

    return matchesSearch && matchesDepartment && matchesRating;
  });

  return (
    <AuthGuard>
      <div className="p-6 max-w-7xl mx-auto min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Bookmarked Users
        </h1>

        {/* Search & Filter Controls */}
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
              <option key={rate} value={String(rate)}>
                {rate} Star{rate > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Bookmarks Display */}
        {filteredBookmarks.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No matching bookmarks found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredBookmarks.map((user) => (
              <Card key={user.id} className="shadow-md dark:shadow-gray-700">
                <Image
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
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
                  Dept: {user.company?.department}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Rating: {user.rating} ★
                </p>

                <div className="mt-4 flex gap-2 w-full justify-center flex-wrap">
                  <Link href={`/employee/${user.id}`}>
                    <Button variant="secondary" className="px-6">
                      View
                    </Button>
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => removeBookmark(user.id)}
                  >
                    Remove
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => handlePromote(user.id)}
                  >
                    Promote
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => handleAssignProject(user.id)}
                    className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600"
                  >
                    Assign to Project
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AuthGuard>
  );
}
