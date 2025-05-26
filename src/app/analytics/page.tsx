"use client";

import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import AuthGuard from "@/components/AuthGuard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Analytics() {
  const departmentRatings = {
    departments: ["HR", "Engineering", "Sales", "Marketing", "Support"],
    ratings: [4.2, 4.6, 4.1, 3.9, 4.3],
  };

  const bookmarkTrends = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    bookmarksCount: [15, 18, 23, 30, 28, 35],
  };

  const barData = {
    labels: departmentRatings.departments,
    datasets: [
      {
        label: "Average Rating",
        data: departmentRatings.ratings,
        backgroundColor: "rgba(220, 38, 38, 0.7)",
        borderRadius: 4,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Department-wise Average Ratings",
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 5,
        ticks: { stepSize: 1 },
      },
    },
  };

  const lineData = {
    labels: bookmarkTrends.months,
    datasets: [
      {
        label: "Bookmarks",
        data: bookmarkTrends.bookmarksCount,
        borderColor: "rgba(220, 38, 38, 1)",
        backgroundColor: "rgba(220, 38, 38, 0.3)",
        fill: true,
        tension: 0.3,
        pointRadius: 4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: {
        display: true,
        text: "Bookmark Trends (Last 6 Months)",
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 5 },
      },
    },
  };

  return (
    <AuthGuard>
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-red-600">
          Analytics Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="bg-white shadow-lg rounded-xl p-4">
            <h2 className="text-lg font-semibold mb-2 text-center">
              Department-wise Average Ratings
            </h2>
            <Bar data={barData} options={barOptions} />
          </div>

          <div className="bg-white shadow-lg rounded-xl p-4">
            <h2 className="text-lg font-semibold mb-2 text-center">
              Bookmark Trends (Last 6 Months)
            </h2>
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Gender Pie Chart */}
          <div className="bg-white shadow-lg rounded-xl p-4">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Gender Distribution
            </h2>
            <Pie
              data={{
                labels: ["Male", "Female", "Other"],
                datasets: [
                  {
                    data: [60, 40, 0], // Replace with dynamic values
                    backgroundColor: ["#3B82F6", "#EF4444", "#FBBF24"],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: { position: "bottom" },
                },
              }}
            />
          </div>

          {/* Department-wise Gender Split Chart */}
          <div className="bg-white shadow-lg rounded-xl p-4">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Department Gender Split
            </h2>
            <Bar
              data={{
                labels: ["HR", "Engineering", "Sales", "Marketing", "Support"],
                datasets: [
                  {
                    label: "Male",
                    data: [3, 5, 2, 1, 3], // Replace with dynamic values
                    backgroundColor: "rgba(59, 130, 246, 0.7)",
                  },
                  {
                    label: "Female",
                    data: [2, 4, 3, 2, 1], // Replace with dynamic values
                    backgroundColor: "rgba(236, 72, 153, 0.7)",
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: "bottom" },
                  title: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    stacked: true,
                  },
                  y: {
                    stacked: true,
                    beginAtZero: true,
                    ticks: { stepSize: 1 },
                  },
                },
              }}
            />
          </div>
        </div>
      </main>
    </AuthGuard>
  );
}
