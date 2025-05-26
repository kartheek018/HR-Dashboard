"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AuthGuard from "@/components/AuthGuard";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  image: string;
  username: string;
  birthDate: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  address: {
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      country: string;
    };
  };
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
}

export default function UserDetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://dummyjson.com/users/${id}`);
      const data = await res.json();
      setUser(data);
    };
    fetchUser();
  }, [id]);

  if (!user) return <div className="p-4 text-center">Loading...</div>;

  return (
    <AuthGuard>
      <div className="p-6 bg-white dark:bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex flex-col items-center">
            {user.image && (
              <Image
                src={user.image}
                alt={user.firstName}
                width={100}
                height={100}
                className="rounded-full"
              />
            )}
            <h1 className="text-2xl font-bold text-red-600 mt-2">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {user.phone}
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-semibold text-red-500 mb-2">
                Personal Info
              </h2>
              <p>Age: {user.age}</p>
              <p>Gender: {user.gender ?? "Not Available"}</p>
              <p>Username: {user.username}</p>
              <p>Birth Date: {user.birthDate ?? "Not Available"}</p>
              <p>Blood Group: {user.bloodGroup ?? "Not Available"}</p>
              <p>Eye Color: {user.eyeColor ?? "Not Available"}</p>
              <p>
                Hair:{" "}
                {user.hair
                  ? `${user.hair.color} (${user.hair.type})`
                  : "Not Available"}
              </p>
              <p>Height: {user.height ?? "Not Available"} cm</p>
              <p>Weight: {user.weight ?? "Not Available"} kg</p>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold text-red-500 mb-2">
                Address
              </h2>
              <p>{user.address?.address ?? "Not Available"}</p>
              <p>
                {user.address?.city ?? "N/A"},{" "}
                {user.address?.state ?? "N/A"},{" "}
                {user.address?.country ?? "N/A"} -{" "}
                {user.address?.postalCode ?? "N/A"}
              </p>
  
              <h2 className="text-lg font-semibold text-red-500 mt-4 mb-2">
                University
              </h2>
              <p>{user.university ?? "Not Available"}</p>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold text-red-500 mb-2">
                Company
              </h2>
              <p>Company: {user.company?.name ?? "Not Available"}</p>
              <p>Title: {user.company?.title ?? "Not Available"}</p>
              <p>Department: {user.company?.department ?? "Not Available"}</p>
              <p>
                Address: {user.company?.address?.address ?? "N/A"},{" "}
                {user.company?.address?.city ?? "N/A"},{" "}
                {user.company?.address?.state ?? "N/A"}
              </p>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold text-red-500 mb-2">
                Bank Info
              </h2>
              <p>Card Number: {user.bank?.cardNumber ?? "Not Available"}</p>
              <p>Card Type: {user.bank?.cardType ?? "Not Available"}</p>
              <p>Expire: {user.bank?.cardExpire ?? "Not Available"}</p>
              <p>Currency: {user.bank?.currency ?? "Not Available"}</p>
              <p>IBAN: {user.bank?.iban ?? "Not Available"}</p>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold text-red-500 mb-2">
                Crypto
              </h2>
              <p>Coin: {user.crypto?.coin ?? "Not Available"}</p>
              <p>Wallet: {user.crypto?.wallet ?? "Not Available"}</p>
              <p>Network: {user.crypto?.network ?? "Not Available"}</p>
            </div>
          </div>
  
          <div className="mt-6 flex justify-center">
            <Link href="/users">
              <button className="bg-red-500 text-white px-6 py-2 rounded-md">
                Back to Users
              </button>
            </Link>
          </div>
        </div>
      </div>
    </AuthGuard>
  );  
}
