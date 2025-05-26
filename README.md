## Hr Dashboard

A feature-rich HR Performance Dashboard built with **Next.js**, designed for HR managers to efficiently track employee performance, manage bookmarks, and gain actionable insights through dynamic visualizations and detailed profiles.

### 🚀 Project Overview
This mini HR dashboard provides an intuitive interface to:

View and manage employee data fetched from dummy APIs

Search and filter employees by multiple criteria

Access detailed employee profiles with tabbed views

Bookmark and promote employees with quick UI actions

Analyze performance trends with interactive charts

Built with scalability, modularity, and user experience in mind, the dashboard also supports dark/light modes and responsive design for seamless usage across devices.
### 🔧 Tech Stack
React (with Next.js App Router) — modern, server/client hybrid rendering

Tailwind CSS — utility-first styling for rapid UI development

JavaScript (ES6+) — clean, modern scripting

State Management: Context API — for efficient global state handling

Charting: Chart.js — to visualize employee performance and trends

Authentication: NextAuth.js — for secure and extensible user authentication

### 🎯 Features Implemented
| Feature                                                      | Status |
| ------------------------------------------------------------ | ------ |
| **Dashboard Homepage (`/`)**                                 | ✅ Done |
| - Fetch & display employee data from API                     | ✅ Done |
| - User cards with Name, Email, Age, Department               | ✅ Done |
| - Performance rating bar (1-5 stars)                         | ✅ Done |
| - Action buttons: View, Bookmark, Promote                    | ✅ Done |
| **Search & Filter**                                          | ✅ Done |
| - Search bar (name, email, department)                       | ✅ Done |
| - Multi-select filter dropdown (department, rating)          | ✅ Done |
| **Dynamic User Details (`/employee/[id]`)**                  | ✅ Done |
| - Detailed profile: address, phone, bio, history             | ✅ Done |
| - Performance rating with stars and badges                   | ✅ Done |
| **Bookmark Manager (`/bookmarks`)**                          | ✅ Done |
| - List bookmarked employees                                  | ✅ Done |
| - Remove bookmarks                                           | ✅ Done |
| - Promote and Assign to Project UI actions                   | ✅ Done |
| **Analytics Page (`/analytics`)**                            | ✅ Done |
| - Department-wise average rating chart                       | ✅ Done |
| - Bookmark trends chart                                      | ✅ Done |
| **State Management (Context API)**                           | ✅ Done |
| **Responsive Design (Mobile to Desktop)**                    | ✅ Done |
| **Dark/Light Mode (Tailwind CSS)**                           | ✅ Done |
| **Custom Hooks (useBookmarks)**                              | ✅ Done |
| **Reusable Components (Card, Button)**                       | ✅ Done |
| **Authentication (NextAuth.js)**                             | ✅ Done |
| **Create User Modal with Validation**                        | ✅ Done |
| **Pagination / Infinite Scroll**                             | ✅ Done |
| **Animations (Tab transitions with Tailwind/Framer Motion)** | ✅ Done |

### 📦 Setup Instructions
#### Clone the repository
   git clone https://github.com/yourusername/HR-Dashboard.git
    cd HR-Dashboard
#### Install dependencies
   npm install
#### Run the development server
   npm run dev
#### Open http://localhost:3000 to view the dashboard
#### Authentication
   Register or login using the mock authentication powered by NextAuth.js

### 📷 Screenshots
1. Login page
   ![image](https://github.com/user-attachments/assets/ad94d830-d4b6-431c-97a6-1d208d5ca421)
2. Home page
   ![image](https://github.com/user-attachments/assets/aeb763d4-bda0-4c3a-ad3d-7d1c07939e01)
3. Users page
   ![image](https://github.com/user-attachments/assets/4b721889-71cb-422a-9305-2d75989e5acc)
4. Users page with filtering
   ![image](https://github.com/user-attachments/assets/1e2104d1-7a85-468e-92d6-22a5ce51fff2)
5. Create new User 
   ![image](https://github.com/user-attachments/assets/e0bc95ce-bd52-4866-a147-8b3e0bdc38f2)
   ![image](https://github.com/user-attachments/assets/d3112236-a156-4d5a-9e22-b8537ba357c7)
7. Adding users to Bookmarks
   <img width="1065" alt="image" src="https://github.com/user-attachments/assets/c75e515f-285f-446c-a524-65f2d6b545cd" />
8. Bookmarked users
   ![image](https://github.com/user-attachments/assets/b60a31b5-1603-48c0-b8d2-a9b02400a598)
9. Viewing the users
   ![image](https://github.com/user-attachments/assets/94968915-0599-480b-bf7d-0669d29d7eeb)
10. Removing the users from Bookmarks
    ![image](https://github.com/user-attachments/assets/2989d6d5-1c2a-44a2-8973-33c980b79492)
11. Analytic Dashboard part-1
    ![image](https://github.com/user-attachments/assets/4493b876-2a3e-481f-8624-a6ab00a349d4)
12. Dark Mode
    ![image](https://github.com/user-attachments/assets/eb7590a7-a0b0-47e6-b976-b4713b9b4f2b)
13. Light Mode
    ![image](https://github.com/user-attachments/assets/d99a478c-252d-4629-8eb7-656645efc287)
14. Responsive pages
    ![image](https://github.com/user-attachments/assets/2565c87d-864d-478f-8150-7666acc03923)
