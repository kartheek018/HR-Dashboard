"use client";

import AuthGuard from "@/components/AuthGuard";
import { JSX, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  UserGroupIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

import SearchBar from "@/components/SearchBar";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  company: {
    department: string;
  };
  address: {
    country: string;
  };
  image: string;
};

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://dummyjson.com/users?limit=208");
      const data = await res.json();
      setUsers(data.users || []);
    }
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (
      user.firstName.toLowerCase().includes(term) ||
      user.lastName.toLowerCase().includes(term) ||
      user.role.toLowerCase().includes(term) ||
      user.company.department.toLowerCase().includes(term)
    );
  });

  const totalEmployees = users.length;
  const uniqueRoles = new Set(users.map((u) => u.role)).size;
  const uniqueDepartments = new Set(users.map((u) => u.company.department))
    .size;
  const uniqueCountries = new Set(users.map((u) => u.address.country)).size;

  const recentUsers = users.slice(0, 5);

  return (
    <AuthGuard>
      <div className="p-8 max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-extrabold text-center mb-6 select-none"
          animate={{
            color: ["#FF474C", "#702c2c", "#fe0d0d"],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          style={{ cursor: "default" }}
        >
          Welcome to the HR Dashboard
        </motion.h1>

        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Search users by name, role, or department..."
            className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <SummaryCard title="Total Employees" value={totalEmployees} />
          <SummaryCard title="Unique Roles" value={uniqueRoles} />
          <SummaryCard title="Departments" value={uniqueDepartments} />
          <SummaryCard title="Countries" value={uniqueCountries} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            👥 Recent Users
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recentUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            🔍 Search Results
          </h2>

          {searchTerm.trim() === "" ? (
            <p className="text-center text-gray-500">
              Type in the search bar to find users.
            </p>
          ) : filteredUsers.length === 0 ? (
            <p className="text-center text-gray-500">
              No users found matching your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredUsers.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          )}
        </div>
      </div>
    </AuthGuard>
  );
}

// function SummaryCard({ title, value }: { title: string; value: number }) {
//   return (
//     <div className="bg-white border-l-4 border-red-600 shadow-md rounded-xl p-4">
//       <p className="text-gray-500 text-sm">{title}</p>
//       <h2 className="text-2xl font-bold text-red-600">{value}</h2>
//     </div>
//   );
// }

function SummaryCard({ title, value }: { title: string; value: number }) {
  const icons: { [key: string]: JSX.Element } = {
    "Total Employees": <UserGroupIcon className="h-8 w-8 text-red-600" />,
    "Unique Roles": <BriefcaseIcon className="h-8 w-8 text-red-600" />,
    Departments: <BuildingOffice2Icon className="h-8 w-8 text-red-600" />,
    Countries: <GlobeAltIcon className="h-8 w-8 text-red-600" />,
  };

  return (
    <div className="bg-white border border-red-100 rounded-xl shadow-md p-5 flex items-center space-x-4 hover:shadow-xl hover:scale-105 transition-transform duration-200">
      <div className="bg-red-100 p-3 rounded-full">
        {icons[title] || <UserGroupIcon className="h-8 w-8 text-red-600" />}
      </div>
      <div>
        <p className="text-sm font-semibold text-red-600">{title}</p>
        <h2 className="text-3xl font-bold text-gray-800">{value}</h2>
      </div>
    </div>
  );
}

function UserCard({ user }: { user: User }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4 border border-red-100 hover:shadow-lg transition-shadow">
      <img
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        className="w-16 h-16 rounded-full border-2 border-red-400"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {user.firstName} {user.lastName}
        </h3>
        <p className="text-sm text-gray-600">
          {user.role} - {user.company.department}
        </p>
      </div>
    </div>
  );
}
